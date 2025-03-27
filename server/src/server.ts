import express from 'express';
import path from 'node:path';
import type { Request, Response } from 'express';
import db from './config/connection.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './schemas/index.js';
import { authenticateToken } from './utils/auth.js';
import { fileURLToPath } from 'node:url';

//manually define __dirname to address deployment issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  await db();
  
  const PORT = process.env.PORT || 3001;
  const app = express();
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server, {
    context: authenticateToken
  }) as any);

  if (process.env.NODE_ENV === 'production') {
    const clientDistPath = path.join(__dirname, '../../client/dist');
    app.use(express.static(clientDistPath));
    
    app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.join(clientDistPath, 'index.html'));
    });
    // app.use(express.static(path.join(__dirname, '../client/dist')));
    // app.get('*', (_req: Request, res: Response) => {
    //   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    // });
  }
  
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

startApolloServer();
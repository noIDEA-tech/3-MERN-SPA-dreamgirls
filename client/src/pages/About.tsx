import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="About-Safe-Spotter">
          <h1>About Us</h1>
          <h2>Safe-Spotter</h2>
          <p>This application is a bootcamp course project created for the sole purpose of completing a course requirment. The following content is an example of what the "About" content might look like
            Safe Spotter is a community-driven platform where users can share safety reviews for locations they've visited or experienced safety concerns. The application uses real-time mapping to visualize safety data and helps users make informed decisions about the places they visit.</p>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
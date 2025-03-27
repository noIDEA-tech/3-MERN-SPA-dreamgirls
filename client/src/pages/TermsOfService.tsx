import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="TermsOfService">
      <div className="container">
        {/* <div className="Terms-Of-Service-Safe-Spotter">
          <h1>Terms of Service</h1>
          <h2>Safe-Spotter</h2>
          <p>You have signed up as a user and may delete your profile at any time.</p> */}
        <div className="terms-of-service-safe-spotter">
            <h1>Terms of Service</h1>
            <h2>Safe Spotter</h2>
  
            <p>This application is a bootcamp course project created for the sole purpose of completing a course requirment. The following content is an example of what the "Terms of Service" content might look like.</p>
           
            <p>By using the Safe Spotter application, you agree to these Terms of Service. If you disagree with any part of these terms, please discontinue use of our application.</p>
  
            <h3>Account Registration</h3>
            <p>You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.</p>
  
            <h3>User Conduct</h3>
            <p>When using Safe Spotter, you agree not to:</p>
              <ul>
                <li>Post false, misleading, or malicious safety information</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the application</li>
              </ul>
  
            <h3>Content Guidelines</h3>
            <p>When submitting safety reviews, focus on factual observations rather than personal opinions about individuals. Do not include content that is discriminatory, defamatory, or violates others' privacy.</p>
  
            <h3>Content Ownership</h3>
            <p>By submitting reviews, you grant Safe Spotter a non-exclusive, worldwide license to use, store, display, and distribute the content in connection with the service.</p>
  
            <h3>Information Accuracy</h3>
            <p>Safe Spotter provides a platform for user-generated content. We do not guarantee the accuracy or reliability of any safety information submitted by users.</p>
  
            <h3>Service Modifications</h3>
            <p>We reserve the right to modify, suspend, or discontinue any part of our service at any time without notice.</p>
  
            <h3>Limitation of Liability</h3>
             <p>Safe Spotter is not liable for any damages arising from the use or inability to use our service. Users rely on safety information at their own risk.</p>
    
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
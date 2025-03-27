import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="PrivacyPolicy">
      <div className="container">        
        <div className="privacy-policy-safe-spotter">
            <h1>Privacy Policy</h1>
            <h2>Safe Spotter</h2>

            <p>This application is a bootcamp course project created for the sole purpose of completing a course requirment. The following content is an example of what the "Privacy Policy" content might look like.</p>
            
            <p>Your privacy is important to us. This Privacy Policy explains how Safe Spotter collects, uses, and protects your personal information when you use our application.</p>
  
            <h3>Information We Collect</h3>
            <p>When you create an account, we collect your username, email address, and securely store your password. When you submit safety reviews, we collect the location data, review content, and timestamps of your submissions.</p>
  
            <h3>Location Data</h3>
            <p>Our app uses location data to provide safety information relevant to specific areas. We only access your location with your permission and when you're actively using the app.</p>
  
            <h3>How We Use Your Information</h3>
            <p>We use your information to create and maintain your account, display safety reviews you submit, and improve the functionality of our application. We do not sell your personal information to third parties.</p>
  
            <h3>Data Security</h3>
            <p>We implement reasonable security measures to protect your personal information. Your password is encrypted using industry-standard techniques, and all data is transmitted using secure connections.</p>
  
            <h3>User-Generated Content</h3>
            <p>Safety reviews you submit are visible to other users. Please do not include personally identifiable information in your review descriptions.</p>
  
            <h3>Policy Updates</h3>
            <p>We may update this policy periodically. We will notify you of any significant changes by posting the new policy on this page.</p>
  
            <h3>Contact Us</h3>
            <p>If you have questions about this Privacy Policy, please contact us at support@safespotter.com.</p>
         
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
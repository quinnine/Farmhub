import React from 'react';
import Footer from '../shared/Footer';  // Import the Footer component
import './Homepage.scss';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <main>
        <h1>Welcome to the Farmhub Homepage</h1>
      </main>

      <Footer /> {/* Use the Footer component here */}
    </div>
  );
};

export default Homepage;

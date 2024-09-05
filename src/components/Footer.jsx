import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Alumni Association. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
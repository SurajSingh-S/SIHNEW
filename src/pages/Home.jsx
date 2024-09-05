import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-no-repeat h-screen"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/7942465/pexels-photo-7942465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg")' }}
      ></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome to the Alumni Association</h1>
        <p className="text-center mb-8">
          Join us in connecting with fellow alumni, exploring job opportunities, and sharing success stories.
        </p>
      </div>

      <div className="container mx-auto p-4 mt-32">
        {/* Sections for Donation, Events, Job Portal, and Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Donation Section */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Donation</h3>
            <p>Your contributions help us support various initiatives and programs. Join us in making a difference!</p>
            <Link to="/donation" className="text-blue-500 hover:underline">Learn More</Link>
          </div>

          {/* Events Section */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Events</h3>
            <p>Stay connected with fellow alumni through our exciting events and gatherings. Don't miss out!</p>
            <Link to="/events" className="text-blue-500 hover:underline">View Events</Link>
          </div>

          {/* Job Portal Section */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Job Portal</h3>
            <p>Explore job opportunities specifically for alumni. Take the next step in your career!</p>
            <Link to="/jobs" className="text-blue-500 hover:underline">Find Jobs</Link>
          </div>

          {/* Success Stories Section */}
          <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Success Stories</h3>
            <p>Read inspiring stories from our alumni who have made significant impacts in their fields.</p>
            <Link to="/success-stories" className="text-blue-500 hover:underline">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
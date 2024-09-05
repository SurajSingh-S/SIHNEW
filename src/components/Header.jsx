import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Menu Button on the left */}
        <button
          onClick={toggleDropdown}
          className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded focus:outline-none"
        >
          Menu
        </button>
        
        {/* Dropdown Button */}
        <div className="relative" ref={dropdownRef}>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10">
              <ul className="py-2">
                <li>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
                </li>
                <li>
                  <Link to="/events" className="block px-4 py-2 hover:bg-gray-200">Events</Link>
                </li>
                <li>
                  <Link to="/donation" className="block px-4 py-2 hover:bg-gray-200">Donate</Link>
                </li>
                <li>
                  <Link to="/success-stories" className="block px-4 py-2 hover:bg-gray-200">Success Stories</Link>
                </li>
                <li>
                  <Link to="/jobs" className="block px-4 py-2 hover:bg-gray-200">Job Portal</Link>
                </li>
                <li>
                  <Link to="/alumni" className="block px-4 py-2 hover:bg-gray-200">Alumni Directory</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Centered Title with University Name Header */}
        <div className="flex flex-col items-center flex-grow">
          <h1 className="text-2xl font-bold font-serif">
            <Link to="/" className="hover:text-gray-300 transition duration-200">XYZ UNIVERSITY</Link>
          </h1>
          <h2 className="text-lg font-medium">Alumni Association</h2>
        </div>

        {/* Login and Register Links on the right */}
        <div className="flex justify-end">
          <Link to="/login" className="hover:text-gray-300 transition duration-200 mr-4 px-4 py-2 rounded bg-blue-500">Login</Link>
          <Link to="/register" className="hover:text-gray-300 transition duration-200 px-4 py-2 rounded bg-blue-500">Register</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
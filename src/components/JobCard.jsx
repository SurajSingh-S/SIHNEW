import React from 'react';

const JobCard = ({ title, company, location }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-bold">{title}</h3>
      <p>{company}</p>
      <p>{location}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
import React, { useState, useEffect } from 'react';
import jobService from '../services/jobService';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await jobService.getJobs();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Job Portal</h1>
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-2">Featured Jobs</h2>
        <ul>
          {jobs.map((job) => (
            <li key={job.id} className="border-b py-2">
              <h3 className="font-bold">{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
                Apply Now
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobPortal;
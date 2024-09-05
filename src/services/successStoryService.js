import React, { useState, useEffect } from 'react';
import successStoryService from '../services/successStoryService';

const SuccessStories = () => {
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const data = await successStoryService.getSuccessStories();
        setSuccessStories(data);
      } catch (error) {
        console.error('Error fetching success stories:', error);
      }
    };

    fetchSuccessStories();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Alumni Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {successStories.map((story) => (
          <div key={story.id} className="bg-white shadow rounded p-4">
            <img src={story.imageUrl} alt={story.name} className="rounded mb-2" />
            <h2 className="text-xl font-bold mb-2">{story.name}</h2>
            <p>{story.title}</p>
            <p className="mt-2">{story.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
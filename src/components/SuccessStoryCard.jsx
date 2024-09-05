import React from 'react';

const SuccessStoryCard = ({ name, title, quote }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src="/images/profile.jpg" alt={name} className="rounded mb-2" />
      <h3 className="font-bold">{name}</h3>
      <p>{title}</p>
      <p className="mt-2">{quote}</p>
    </div>
  );
};

export default SuccessStoryCard;
import React from 'react';

const AlumniCard = ({ name, title, graduationYear }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src="/images/profile.jpg" alt={name} className="rounded mb-2" />
      <h3 className="font-bold">{name}</h3>
      <p>{title}</p>
      <p>Graduated in {graduationYear}</p>
    </div>
  );
};

export default AlumniCard;
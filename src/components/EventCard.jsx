import React from 'react';

const EventCard = ({ title, date, location }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src="/images/event.jpg" alt={title} className="rounded mb-2" />
      <h3 className="font-bold">{title}</h3>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );
};

export default EventCard;
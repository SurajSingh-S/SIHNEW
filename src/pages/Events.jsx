import React from 'react';

const Events = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Events and Reunions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">
          <img src="/images/event1.jpg" alt="Event 1" className="rounded mb-2" />
          <h2 className="text-xl font-bold mb-2">Event 1</h2>
          <p>Description of Event 1</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
            Register
          </button>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img src="/images/event2.jpg" alt="Event 2" className="rounded mb-2" />
          <h2 className="text-xl font-bold mb-2">Event 2</h2>
          <p>Description of Event 2</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
            Register
          </button>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img src="/images/event3.jpg" alt="Event 3" className="rounded mb-2" />
          <h2 className="text-xl font-bold mb-2">Event 3</h2>
          <p>Description of Event 3</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
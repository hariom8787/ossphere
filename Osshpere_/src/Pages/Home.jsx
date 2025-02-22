import React from "react";

const Home = () => {
  const trendingEvents = [
    {
      id: 1,
      title: "React Summit 2025",
      date: "March 10, 2025",
      location: "Bangalore, India",
    },
    {
      id: 2,
      title: "AI & ML Workshop",
      date: "April 5, 2025",
      location: "Online",
    },
    {
      id: 3,
      title: "Hackathon 2025",
      date: "May 20, 2025",
      location: "Delhi, India",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Discover & Track Tech Events Easily!</h1>
        <p className="mt-4 text-lg">
          Stay updated with the latest tech events, workshops, and hackathons happening around you.
        </p>
        <div className="mt-6">
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full mr-4 hover:bg-gray-200 transition">
            Explore Events
          </button>
          <button className="bg-gray-800 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-700 transition">
            Create an Event
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Event Tracker?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">📍 Find Events Nearby</h3>
            <p className="text-gray-600 mt-2">Search for events based on your location.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🎟️ Easy Registration</h3>
            <p className="text-gray-600 mt-2">Register for events with a single click.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🔔 Stay Notified</h3>
            <p className="text-gray-600 mt-2">Get updates on upcoming events.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🏅 Community-Driven</h3>
            <p className="text-gray-600 mt-2">Events powered by real users.</p>
          </div>
        </div>
      </section>

      {/* Trending Events Section */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">🔥 Trending Events</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingEvents.map((event) => (
            <div key={event.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Join the Community of Tech Enthusiasts!</h2>
        <p className="mt-4 text-lg">Sign up now and never miss an important tech event.</p>
        <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;

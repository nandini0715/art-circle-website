import React from 'react';
import EventCard from './EventCard';

const UpcomingEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      image: '/event-img/image1.jpg',
      title: '18th Music Festival',
      description: 'Art Circle celebrates its 18th year. The Classical Music Festival will be held from 24th-26th January 2025, showcasing new and veteran artists.',
      date: 'January 24-26, 2025'
    },
    {
      id: 2,
      image: '/img/image1.jpg',
      title: 'Ek Dastan Ek Haqeeqat',
      description: 'Art Circle Ratnagiri presents Ek Dastan Ek Haqeeqat starring Naseeruddin Shah, exploring reality and fiction through powerful storytelling & acting.',
      date: 'Coming Soon'
    },
    {
      id: 3,
      image: '/img/img.jpg',
      title: 'Aurat Aurat Aurat',
      description: 'Art Circle Ratnagiri presents Aurat Aurat Aurat, a powerful play by Naseeruddin Shah, exploring women\'s struggles, strength, and resilience.',
      date: 'Coming Soon'
    }
  ];

  return (
    <div className="container-xxl py-5" id="upcoming">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Upcoming Events</h1>
        </div>
        <div className="row g-4">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

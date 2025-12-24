import React from 'react';
import EventCard from './EventCard';

const PastEvents = () => {
  const pastEvents = [
    {
      id: 'P1',
      image: '/img/image5.jpg',
      title: 'Kabir Festival',
      description: 'A celebration of Kabir\'s poetry and music, bringing together artists and audiences in a soulful experience.',
      date: 'December 2024'
    },
    {
      id: 'P2',
      image: '/img/image4.jpg',
      title: 'Ghazal Narration',
      description: 'On 22nd December 2024, Art Circle Ratnagiri hosted "A Melodious Word Concert" at Sharvani Hall, with Dr. Ashish Mujumdar exploring ghazal techniques, composition, and their life impact.',
      date: 'December 22, 2024'
    },
    {
      id: 'P3',
      image: '/img/image8.png',
      title: 'Swaraswapna',
      description: 'The Swaraswapna program, led by Swapnatai Datar, featured 84 young violinists in a captivating performance on 9th November in Ratnagiri. Celebrating its 92nd edition, the event was a musical delight for all.',
      date: 'November 9, 2024'
    },
    {
      id: 'P4',
      image: '/img/image9.jpg',
      title: 'Swarasha',
      description: 'Swarasha, held on 10th November 2024, featured Asha Bhosale\'s iconic Hindi and Marathi songs. Organized by Art Circle Foundation, the event captivated the audience with her timeless performances.',
      date: 'November 10, 2024'
    },
    {
      id: 'P5',
      image: '/img/image10.jpg',
      title: 'Classical Dance Performance',
      description: 'A mesmerizing evening of classical dance showcasing traditional Indian art forms.',
      date: 'October 2024'
    },
    {
      id: 'P6',
      image: '/img/image11.jpg',
      title: 'Art Workshop',
      description: 'An interactive workshop for aspiring artists to learn various art techniques from renowned artists.',
      date: 'September 2024'
    }
  ];

  return (
    <div className="container-xxl py-5" id="past">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Past Events</h1>
        </div>
        <div className="row g-4">
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEvents;

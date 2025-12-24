import React from 'react';
import { Link } from 'react-router-dom';

const Highlights = () => {
  const upcomingEvents = [
    {
      id: 1,
      image: '/event-img/image1.jpg',
      title: '18th Music Festival',
      description: 'Art Circle celebrates its 18th year. The Classical Music Festival will be held from 24th-26th January 2025, showcasing new and veteran artists.',
      link: '/event-details/1'
    },
    {
      id: 2,
      image: '/img/image1.jpg',
      title: 'Ek Dastan Ek Haqeeqat',
      description: 'Art Circle Ratnagiri presents Ek Dastan Ek Haqeeqat starring Naseeruddin Shah, exploring reality and fiction through powerful storytelling & acting.',
      link: '/event-details/2'
    },
    {
      id: 3,
      image: '/img/img.jpg',
      title: 'Aurat Aurat Aurat',
      description: 'Art Circle Ratnagiri presents Aurat Aurat Aurat, a powerful play by Naseeruddin Shah, exploring women\'s struggles, strength, and resilience.',
      link: '/event-details/3'
    }
  ];

  const pastEvents = [
    {
      id: 'P2',
      image: '/img/image4.jpg',
      title: 'Ghazal narration',
      description: 'On 22nd December 2024, Art Circle Ratnagiri hosted "A Melodious Word Concert" at Sharvani Hall, with Dr. Ashish Mujumdar exploring ghazal techniques, composition, and their life impact.',
      link: '/event-details/P2'
    },
    {
      id: 'P3',
      image: '/img/image8.png',
      title: 'Swaraswapna',
      description: 'The Swaraswapna program, led by Swapnatai Datar, featured 84 young violinists in a captivating performance on 9th November in Ratnagiri. Celebrating its 92nd edition, the event was a musical delight for all.',
      link: '/event-details/P3'
    },
    {
      id: 'P4',
      image: '/img/image9.jpg',
      title: 'Swarasha',
      description: 'Swarasha, held on 10th November 2024, featured Asha Bhosale\'s iconic Hindi and Marathi songs. Organized by Art Circle Foundation, the event captivated the audience with her timeless performances.',
      link: '/event-details/P4'
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Highlights</h1>
        </div>
        
        {/* Upcoming Events */}
        <div className="row g-4 justify-content-center">
          <div className="text-center">
            <h3 className="mb-4 pb-2">Upcoming Events</h3>
          </div>
          {upcomingEvents.map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={event.image} alt={event.title} />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">{event.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
                  <Link className="fw-medium" to={event.link}>
                    Read More<i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <br /><br />

        {/* Past Events */}
        <div className="row g-4">
          <div className="events-section position-relative text-center">
            <h3 className="mb-4 pb-2 d-inline-block text-center">Past Events</h3>
            <Link 
              to="/events#past"
              className="btn btn-view-more py-md-2 px-md-4 position-absolute end-0 top-50 translate-middle-y"
            >
              View More
            </Link>
          </div>
          {pastEvents.map((event) => (
            <div key={event.id} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={event.image} alt={event.title} />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">{event.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
                  <Link className="fw-medium" to={event.link}>
                    Read More<i className="fa fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;

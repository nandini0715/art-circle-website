import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = () => {
  const { eventId } = useParams();

  // Mock event data - in a real app, this would come from an API or state management
  const events = {
    '1': {
      title: '18th Music Festival',
      image: '/event-img/image1.jpg',
      date: 'January 24-26, 2025',
      description: 'Art Circle celebrates its 18th year. The Classical Music Festival will be held from 24th-26th January 2025, showcasing new and veteran artists.',
      fullDescription: 'Join us for our 18th Annual Classical Music Festival, a three-day celebration of musical excellence. This year\'s festival features renowned classical musicians from across India, as well as emerging talents. Experience traditional ragas, tabla performances, and vocal recitals in an intimate setting.',
      venue: 'Ratnagiri Cultural Center',
      time: '6:00 PM onwards'
    },
    '2': {
      title: 'Ek Dastan Ek Haqeeqat',
      image: '/img/image1.jpg',
      date: 'Coming Soon',
      description: 'Art Circle Ratnagiri presents Ek Dastan Ek Haqeeqat starring Naseeruddin Shah, exploring reality and fiction through powerful storytelling & acting.',
      fullDescription: 'An extraordinary theatrical experience with legendary actor Naseeruddin Shah. This play blurs the lines between reality and fiction, taking the audience on a journey through compelling narratives and exceptional performances.',
      venue: 'To be announced',
      time: 'To be announced'
    },
    // Add more events as needed
  };

  const event = events[eventId] || {
    title: 'Event Not Found',
    description: 'The requested event details are not available.',
    image: '/img/placeholder.jpg'
  };

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">{event.title}</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link className="text-white" to="/events">Events</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Event Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Event Details Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid rounded" src={event.image} alt={event.title} />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="mb-4">{event.title}</h1>
              {event.date && (
                <p className="mb-3">
                  <i className="fa fa-calendar text-primary me-2"></i>
                  <strong>Date:</strong> {event.date}
                </p>
              )}
              {event.venue && (
                <p className="mb-3">
                  <i className="fa fa-map-marker-alt text-primary me-2"></i>
                  <strong>Venue:</strong> {event.venue}
                </p>
              )}
              {event.time && (
                <p className="mb-3">
                  <i className="fa fa-clock text-primary me-2"></i>
                  <strong>Time:</strong> {event.time}
                </p>
              )}
              <p className="mb-4">{event.description}</p>
              {event.fullDescription && (
                <p className="mb-4">{event.fullDescription}</p>
              )}
              <Link to="/events" className="btn btn-primary py-3 px-5">Back to Events</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Event Details End */}
    </>
  );
};

export default EventDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item">
        <div className="overflow-hidden">
          <img className="img-fluid" src={event.image} alt={event.title} />
        </div>
        <div className="p-4 text-center border border-5 border-light border-top-0">
          <h4 className="mb-3">{event.title}</h4>
          <p>{event.description}</p>
          {event.date && <p className="text-muted"><i className="fa fa-calendar me-2"></i>{event.date}</p>}
          <Link className="fw-medium" to={event.link || `/event-details/${event.id}`}>
            Read More<i className="fa fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

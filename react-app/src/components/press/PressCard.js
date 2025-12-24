import React from 'react';
import { Link } from 'react-router-dom';

const PressCard = ({ press }) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-item h-100">
        <div className="overflow-hidden">
          <img className="img-fluid" src={press.imageUrl} alt={press.title} />
        </div>
        <div className="p-4 border border-5 border-light border-top-0">
          <h4 className="mb-3">{press.title}</h4>
          <p className="text-muted mb-2">
            <i className="fa fa-calendar me-2"></i>{press.date}
          </p>
          {press.category && (
            <span className="badge bg-primary mb-2">{press.category}</span>
          )}
          <p className="mb-3">{press.content.substring(0, 100)}...</p>
          <Link className="fw-medium" to={`/press-details/${press.pressID}`}>
            Read More<i className="fa fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PressCard;

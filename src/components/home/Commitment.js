import React from 'react';

const Commitment = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Our Commitment</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="text-center">
              <i className="fas fa-music fa-3x text-primary mb-3"></i>
              <h5>Cultural Events</h5>
              <p>Organizing vibrant cultural events and music festivals</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <i className="fas fa-users fa-3x text-primary mb-3"></i>
              <h5>Community Engagement</h5>
              <p>Building a strong community of art enthusiasts</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <i className="fas fa-palette fa-3x text-primary mb-3"></i>
              <h5>Art Promotion</h5>
              <p>Promoting traditional and contemporary art forms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;

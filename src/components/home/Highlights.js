import React from 'react';

const Highlights = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="display-5 mb-5">Highlights</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="text-center">
            <h3 className="mb-4 pb-2">Upcoming Events</h3>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="service-item">
              <div className="overflow-hidden">
                <img className="img-fluid" src="/event-img/image1.jpg" alt="Event" />
              </div>
              <div className="p-4 text-center">
                <h5 className="mb-3">Check out our upcoming events</h5>
                <p>Join us for exciting cultural events and festivals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container about px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/image2.jpg"
                style={{ objectFit: 'cover' }}
                alt="About Art Circle"
              />
            </div>
          </div>
          <div className="col-lg-6 about-text py-5">
            <div className="p-lg-5 pe-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">About Us</h1>
              </div>
              <p className="mb-4 pb-2">
                Art Circle, Ratnagiri is an organization working in cultural field in and around Ratnagiri. Established in 2008.
              </p>
              <Link to="/about" className="btn btn-primary py-3 px-5">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

import React from 'react';

const Commitment = () => {
  const commitments = [
    {
      icon: 'fa-check',
      label: 'Event',
      value: 'Quality'
    },
    {
      icon: 'fa-user-check',
      label: 'Creative',
      value: 'Ideas'
    },
    {
      icon: 'fa-drafting-compass',
      label: 'Accessible',
      value: 'Initiatives'
    },
    {
      icon: 'fa-headphones',
      label: '24/7',
      value: 'Support'
    }
  ];

  return (
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
            <div className="p-lg-5 ps-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4">Our Commitment</h1>
              </div>
              <p className="mb-4 pb-2">
                We are dedicated to delivering high-quality events, providing creative
                opportunities, ensuring accessible initiatives, and offering continuous support to our
                community.
              </p>
              <div className="row g-4">
                {commitments.map((item, index) => (
                  <div key={index} className="col-6">
                    <div className="d-flex align-items-center">
                      <div 
                        className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                        style={{ width: '60px', height: '60px' }}
                      >
                        <i className={`fa ${item.icon} fa-2x text-primary`}></i>
                      </div>
                      <div className="ms-4">
                        <p className="mb-2">{item.label}</p>
                        <h5 className="mb-0">{item.value}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <img 
                className="position-absolute img-fluid w-100 h-100" 
                src="/img/image3.jpg"
                style={{ objectFit: 'cover' }} 
                alt="Our Commitment" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;

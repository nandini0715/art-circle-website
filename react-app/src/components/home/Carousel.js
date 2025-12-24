import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  useEffect(() => {
    // Initialize owl carousel if needed
    // This would typically be done with a library like react-owl-carousel or similar
  }, []);

  const carouselItems = [
    {
      image: '/img/image.jpg',
      title: 'Experience the Magic of Art & Culture!',
      description: 'Join us for vibrant music festivals, cultural performances, and creative workshops.',
      buttonText: 'Explore Events',
      buttonLink: '/events'
    },
    {
      image: '/img/image2.jpg',
      title: 'Celebrating Creativity Since 2008!',
      description: 'Take a look at our successful events and artistic milestones.',
      buttonText: 'View Gallery',
      buttonLink: '/gallery'
    },
    {
      image: '/img/image3.jpg',
      title: 'Join the Circle!',
      description: 'Perform, volunteer, or partner with us to keep the spirit of art alive.',
      buttonText: 'Join Us Today',
      buttonLink: '/get-involved'
    }
  ];

  return (
    <div className="container-fluid p-0 pb-5">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="position-relative">
                <img className="img-fluid w-100" src={item.image} alt={item.title} style={{ height: '600px', objectFit: 'cover' }} />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(53, 53, 53, .7)' }}>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-8 text-center">
                        <h1 className="display-3 text-white animated slideInDown mb-4">{item.title}</h1>
                        <p className="fs-5 fw-medium text-white mb-4 pb-2">{item.description}</p>
                        <Link to={item.buttonLink} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">{item.buttonText}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

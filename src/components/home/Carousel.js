import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>'
    ]
  };

  const slides = [
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
      buttonText: 'Get Involved',
      buttonLink: '/get-involved'
    }
  ];

  return (
    <div className="container-fluid p-0 pb-5">
      <OwlCarousel className="header-carousel position-relative" {...options}>
        {slides.map((slide, index) => (
          <div className="owl-carousel-item position-relative" key={index}>
            <img className="img-fluid" src={slide.image} alt={slide.title} />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: 'rgba(53, 53, 53, .7)' }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      {slide.title}
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      {slide.description}
                    </p>
                    <Link
                      to={slide.buttonLink}
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;

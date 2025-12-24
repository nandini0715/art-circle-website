import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>3212, M.G. Road, Ratnagiri, Maharashtra, India
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+91 86682-72828
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>artcirclewebsite@gmail.com
            </p>

            <div className="social-icons d-flex justify-content-md-start justify-content-center">
              <a href="https://www.facebook.com/artcircleratnagiri" className="fab fa-facebook-f" aria-label="Facebook">
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.youtube.com/@artcircleratnagiri" className="fab fa-youtube" aria-label="YouTube">
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://www.instagram.com/artcircleratnagiri/" className="fab fa-instagram" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/artcircleratnagiri-undefined-507a33325/" className="fab fa-linkedin" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Get-Involved</h4>
            <div className="get-involved-links">
              <Link className="btn btn-link" to="/get-involved#membership-sign-ups">
                Membership Sign-Ups
              </Link>
              <Link className="btn btn-link" to="/get-involved#become-a-sponsor">
                Become a Sponsor
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <div className="quick-links">
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/events">
                Events
              </Link>
              <Link className="btn btn-link" to="/get-involved">
                Get-Involved
              </Link>
              <Link className="btn btn-link" to="/gallery">
                Gallery
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Subscribe</h4>
            <p>Stay in the loop with our latest events. Subscribe below and never miss out!</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <form>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-4">
        <p>
          &copy; 2025 <span>artcircleratnagiri.org</span>. All Rights Reserved. Designed by{' '}
          <a href="mailto:nandinijadhav1525@gmail.com?cc=shravanis0511@gmail.com">Nandini & Shravani</a>.
        </p>
      </div>
    </div>
  );
};

export default Footer;

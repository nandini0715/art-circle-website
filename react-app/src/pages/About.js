import React, { useState, useEffect } from 'react';
import { fetchAboutData } from '../services/googleSheetsService';

const About = () => {
  const [aboutContent, setAboutContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const data = await fetchAboutData();
        setAboutContent(data);
      } catch (error) {
        console.error('Error loading about data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadAboutData();
  }, []);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">About</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="mb-4">About Art Circle Foundation</h1>
              <p className="mb-4">
                Art Circle, Ratnagiri is an organization working in the cultural field in and around Ratnagiri. 
                Established in 2008, we have been dedicated to promoting arts and culture in our community.
              </p>
              {!loading && aboutContent.length > 0 && (
                <div className="about-content">
                  {aboutContent.map((row, index) => (
                    <div key={index} className="mb-3">
                      <p>{row.join(' - ')}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <img className="img-fluid" src="/img/image2.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
};

export default About;

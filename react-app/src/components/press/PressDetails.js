import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPressReleases } from '../../services/googleSheetsService';

const PressDetails = () => {
  const { pressId } = useParams();
  const [press, setPress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPressDetails = async () => {
      try {
        const data = await fetchPressReleases();
        const foundPress = data.find(p => p.pressID === pressId);
        setPress(foundPress);
      } catch (error) {
        console.error('Error loading press details:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPressDetails();
  }, [pressId]);

  if (loading) {
    return (
      <div className="container-xxl py-5">
        <div className="container text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!press) {
    return (
      <div className="container-xxl py-5">
        <div className="container text-center">
          <h2>Press Release Not Found</h2>
          <Link to="/press" className="btn btn-primary mt-3">Back to Press</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">{press.title}</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link className="text-white" to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link className="text-white" to="/press">Press</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Press Details</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Press Details Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid rounded mb-4" src={press.imageUrl} alt={press.title} />
              <h1 className="mb-4">{press.title}</h1>
              <p className="mb-3">
                <i className="fa fa-calendar text-primary me-2"></i>
                <strong>Date:</strong> {press.date}
              </p>
              {press.category && (
                <p className="mb-3">
                  <span className="badge bg-primary">{press.category}</span>
                </p>
              )}
              <div className="press-content">
                <p>{press.content}</p>
              </div>
              <Link to="/press" className="btn btn-primary py-3 px-5 mt-4">Back to Press</Link>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Related Information</h4>
                <p>Stay updated with our latest news and press releases.</p>
                <Link to="/press" className="btn btn-outline-primary w-100 mb-2">View All Press</Link>
                <Link to="/contact" className="btn btn-outline-primary w-100">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Press Details End */}
    </>
  );
};

export default PressDetails;

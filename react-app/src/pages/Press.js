import React, { useState, useEffect } from 'react';
import { fetchPressReleases } from '../services/googleSheetsService';
import PressCard from '../components/press/PressCard';

const Press = () => {
  const [pressReleases, setPressReleases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPressReleases = async () => {
      try {
        const data = await fetchPressReleases();
        setPressReleases(data);
      } catch (error) {
        console.error('Error loading press releases:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPressReleases();
  }, []);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Press</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Press</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Press Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5">Press Releases</h1>
          </div>
          
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {pressReleases.map((press) => (
                <PressCard key={press.pressID} press={press} />
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Press Section End */}
    </>
  );
};

export default Press;

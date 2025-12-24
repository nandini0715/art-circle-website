import React, { useState, useEffect } from 'react';

const Spinner = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div 
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

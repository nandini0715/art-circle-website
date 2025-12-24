import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default BackToTop;

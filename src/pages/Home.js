import React from 'react';
import Carousel from '../components/home/Carousel';
import AboutSection from '../components/home/AboutSection';
import Highlights from '../components/home/Highlights';
import Commitment from '../components/home/Commitment';

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutSection />
      <Highlights />
      <Commitment />
    </div>
  );
};

export default Home;

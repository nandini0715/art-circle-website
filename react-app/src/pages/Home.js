import React from 'react';
import Spinner from '../components/common/Spinner';
import Carousel from '../components/home/Carousel';
import AboutSection from '../components/home/AboutSection';
import Highlights from '../components/home/Highlights';
import Commitment from '../components/home/Commitment';

const Home = () => {
  return (
    <>
      <Spinner />
      <Carousel />
      <AboutSection />
      <Highlights />
      <Commitment />
    </>
  );
};

export default Home;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/style.css';
import './App.css';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';
import Spinner from './components/common/Spinner';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Press from './pages/Press';
import GetInvolved from './pages/GetInvolved';
import EventDetails from './components/events/EventDetails';
import UpEventDetails from './components/events/UpEventDetails';

function App() {
  return (
    <div className="App">
      <Spinner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/event-details/:eventId" element={<EventDetails />} />
        <Route path="/up-event-details/:eventId" element={<UpEventDetails />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

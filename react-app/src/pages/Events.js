import React from 'react';
import UpcomingEvents from '../components/events/UpcomingEvents';
import PastEvents from '../components/events/PastEvents';

const Events = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Events</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Events</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      <UpcomingEvents />
      <PastEvents />
    </>
  );
};

export default Events;

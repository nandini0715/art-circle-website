import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from '../../services/googleSheetsService';

const UpEventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      const eventData = await fetchEventById(eventId, false);
      setEvent(eventData);
      setLoading(false);
    };
    loadEvent();
  }, [eventId]);

  if (loading) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  if (!event) {
    return <div className="container py-5 text-center">Event not found</div>;
  }

  return (
    <div>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">{event.name}</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <img src={event.imageUrl} alt={event.name} className="img-fluid mb-4" />
            <h3>Event Details</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Organizer Contact:</strong> {event.organizerContact}</p>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpEventDetails;

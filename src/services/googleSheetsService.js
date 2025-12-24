import axios from 'axios';

const SHEETS_API_KEY = 'AIzaSyAeou-CBTCSv5TVL7Gz86GSzxhNVUp9vPo';
const PRESS_SHEET_ID = '1UlM_D8j1U4uj6k2JSVVAnORneBdaR61PXz28JyObMaI';
const EVENTS_SHEET_ID = '1WpFmdygyuxn54RzrW17djmwldaJiS4CzCDUaluuLL_c';

export const fetchPressReleases = async () => {
  try {
    const range = 'about!A1:C';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${PRESS_SHEET_ID}/values/${range}?key=${SHEETS_API_KEY}`;
    
    const response = await axios.get(url);
    const rows = response.data.values || [];
    
    return rows.map(row => ({
      imageUrl: row[0] || 'https://via.placeholder.com/300',
      title: row[1] || 'Untitled',
      content: row[2] || 'No content available.'
    }));
  } catch (error) {
    console.error('Error fetching press releases:', error);
    return [];
  }
};

export const fetchUpcomingEvents = async () => {
  try {
    const range = 'Sheet1!A1:H';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${EVENTS_SHEET_ID}/values/${range}?key=${SHEETS_API_KEY}`;
    
    const response = await axios.get(url);
    const data = response.data.values || [];
    
    if (data.length > 1) {
      const events = data.slice(1); // Skip header row
      return events.map(event => ({
        id: event[0],
        name: event[1],
        date: event[2],
        time: event[3],
        venue: event[4],
        description: event[5],
        organizerContact: event[6],
        imageUrl: event[7]
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
};

export const fetchPastEvents = async () => {
  try {
    const range = 'Sheet2!A1:G';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${EVENTS_SHEET_ID}/values/${range}?key=${SHEETS_API_KEY}`;
    
    const response = await axios.get(url);
    const data = response.data.values || [];
    
    if (data.length > 1) {
      const events = data.slice(1); // Skip header row
      return events.map(event => ({
        id: event[0],
        name: event[1],
        date: event[2],
        venue: event[3],
        description: event[4],
        category: event[5],
        imageUrl: event[6]
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching past events:', error);
    return [];
  }
};

export const fetchEventById = async (eventId, isPast = false) => {
  try {
    const events = isPast ? await fetchPastEvents() : await fetchUpcomingEvents();
    return events.find(event => event.id === eventId);
  } catch (error) {
    console.error('Error fetching event by ID:', error);
    return null;
  }
};

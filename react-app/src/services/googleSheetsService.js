import axios from 'axios';

const SHEET_ID = '1YuBLugwwr0LkYxC3_XWh5PaSJ4JJG77nRR55Ex3HefM';
const API_KEY = 'AIzaSyB6NFf1xNsE6Ky8Pp6rGiUdcVdJcbnOb40';

export const fetchPressReleases = async () => {
  const range = 'press!A1:F';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;
  
  try {
    const response = await axios.get(url);
    const rows = response.data.values || [];
    
    return rows.map(row => ({
      pressID: row[0],
      imageUrl: row[1] || 'https://via.placeholder.com/300',
      title: row[2] || 'Untitled',
      content: row[3] || 'No content available.',
      date: row[4] || 'Date not provided.',
      category: row[5] || 'Uncategorized',
    }));
  } catch (error) {
    console.error('Error fetching press releases:', error);
    return [];
  }
};

export const fetchAboutData = async () => {
  const range = 'about!A1:C';
  const ABOUT_SHEET_ID = '1UlM_D8j1U4uj6k2JSVVAnORneBdaR61PXz28JyObMaI';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${ABOUT_SHEET_ID}/values/${range}?key=${API_KEY}`;
  
  try {
    const response = await axios.get(url);
    return response.data.values || [];
  } catch (error) {
    console.error('Error fetching about data:', error);
    return [];
  }
};

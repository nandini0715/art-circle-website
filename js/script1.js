document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');
    const pressReleaseContainer = document.getElementById('pressReleaseContainer');

    // Google Sheets API Setup
    const sheetId = '1YuBLugwwr0LkYxC3_XWh5PaSJ4JJG77nRR55Ex3HefM'; // Your Google Sheet ID
    const apiKey = 'AIzaSyB6NFf1xNsE6Ky8Pp6rGiUdcVdJcbnOb40'; // Your API Key
    const range = 'press!A1:F'; // The range for the 'press' sheet (including the image column)
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    let pressReleases = []; // Store fetched press releases

    // Fetch Press Releases from Google Sheets
    const fetchPressReleases = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const rows = data.values || [];
            pressReleases = rows.map(row => ({
                pressID: row[0],
                imageUrl: row[1] || 'https://via.placeholder.com/300', // Image URL
                title: row[2] || 'Untitled', // Title
                content: row[3] || 'No content available.', // Content
                date: row[4] || 'Date not provided.', // Date
                category: row[5] || 'Uncategorized', // Category
            }));
            renderPressReleases(pressReleases);
        } catch (error) {
            console.error('Error fetching press releases:', error);
        }
    };

    // Function to Render Press Releases
    const renderPressReleases = (releases) => {
        pressReleaseContainer.innerHTML = '';
        if (releases.length === 0) {
            pressReleaseContainer.innerHTML = '<p class="text-center">No press releases found.</p>';
            return;
        }
        releases.forEach(release => {
            const card = `
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${release.imageUrl}" class="card-img-top" alt="${release.title}">
              <div class="card-body">
                <h5 class="card-title">${release.title}</h5>
                
                <p class="text-muted">Published on ${release.date}</p>
                <a href="press-details.html?pressId=${release.pressID}" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>`;
            pressReleaseContainer.innerHTML += card;
        });
    };

    // Initial Fetch and Render
    fetchPressReleases();

    // Search Functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filtered = pressReleases.filter(release =>
            release.title.toLowerCase().includes(query)
        );
        renderPressReleases(filtered);
    });

    // Filter Functionality by Category
    filterSelect.addEventListener('change', () => {
        const category = filterSelect.value;
        const filtered = category === 'all'
            ? pressReleases
            : pressReleases.filter(release => release.category.toLowerCase() === category.toLowerCase());
        renderPressReleases(filtered);
    });
});


const sheetId = '1YuBLugwwr0LkYxC3_XWh5PaSJ4JJG77nRR55Ex3HefM';
const apiKey = 'AIzaSyB6NFf1xNsE6Ky8Pp6rGiUdcVdJcbnOb40';

// Define ranges for each sheet
const ranges = {
    albums: 'albums!A1:C',
    videos: 'videos!A1:B',
    post: 'post!A1:B',
    gallery: 'gallery!A1:A',
    tagged: 'tagged!A1:B'
};

// API URLs for each sheet
const apiUrls = {
    albums: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${ranges.albums}?key=${apiKey}`,
    videos: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${ranges.videos}?key=${apiKey}`,
    post: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${ranges.post}?key=${apiKey}`,
    gallery: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${ranges.gallery}?key=${apiKey}`,
    tagged: `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${ranges.tagged}?key=${apiKey}`
};

// Global arrays for categories
const content = {
    albums: [],
    videos: [],
    post: [],
    gallery: [],
    tagged: []
};

// Extract Google Drive File ID
const extractDriveID = (url) => {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
};

// Generate Google Drive Embed Link
const getDriveEmbedLink = (fileID) => `https://drive.google.com/file/d/${fileID}/preview`;

// Fetch data from a specific sheet
const fetchData = async (url, type = "image") => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const rows = data.values || [];

        if (type === "albums") {
            return rows.map(row => ({
                src: row[0],   // Cover Image URL
                title: row[1] || '',  // Album Title
                link: row[2] || ''    // Facebook Album Link
            }));
        } else {
            return rows.map(row => ({
                src: row[0],   // Image or video URL
                title: row[1] || ''  // Title (if applicable)
            }));
        }
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return [];
    }
};

// Update the gallery with the selected content
const updateGallery = (content, type = "image") => {
    const portfolioContainer = document.querySelector('.portfolio-container');
    portfolioContainer.innerHTML = ''; // Clear existing content

    content.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item', 'animate__upToBottom');

        const fileID = extractDriveID(item.src);
        const embedLink = fileID ? getDriveEmbedLink(fileID) : item.src;
        if (type === "albums") {
            // Albums should open Facebook links, not Lightbox
            portfolioItem.innerHTML = `
              <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="album-link">
                <img src="${item.src}" alt="${item.title}" class="gallery-img">
              </a>
              <div class="portfolio-text">
                <h5>${item.title}</h5>
              </div>
            `;
      
            // Ensure Lightbox is disabled for albums
            portfolioItem.querySelector(".album-link").removeAttribute("data-lightbox");
            portfolioItem.querySelector(".gallery-img").removeAttribute("data-lightbox");
      
          }
        else if (type === "video") {
            portfolioItem.innerHTML = `
        <video controls class="gallery-video">
          <source src="${embedLink}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="portfolio-text">
          <h5>${item.title}</h5>
        </div>
      `;
        } else {
            portfolioItem.innerHTML = `
        <a href="${embedLink}" data-lightbox="gallery" data-title="${item.title}">
          <img src="${embedLink}" alt="${item.title}" class="gallery-img">
        </a>
        <div class="portfolio-text">
          <h5>${item.title}</h5>
        </div>
      `;
        }
        portfolioContainer.appendChild(portfolioItem);
    });
    disableLightboxForAlbums();
};

// Event listener for tab switching
document.addEventListener('DOMContentLoaded', async () => {
    const tabs = document.querySelectorAll('.tabs button');
    const tabNameDisplay = document.getElementById('selected-tab-name');

    tabs.forEach(tab => {
        tab.addEventListener('click', async () => {
            tabs.forEach(t => t.classList.remove('active')); // Remove active class
            tab.classList.add('active'); // Add active class to clicked tab

            // Update the tab name display
            tabNameDisplay.textContent = tab.textContent;

            // Determine which content to load based on the clicked tab
            const tabId = tab.id;
            let contentType = '';
            switch (tabId) {
                case 'tab-albums':
                    contentType = 'albums';

                    if (content.albums.length === 0) {
                        const data = await fetchData(apiUrls.albums, "albums");
                        content.albums = data;
                    }

                    updateGallery(content.albums, "albums"); // Load albums properly
                    return;

                case 'tab-videos':
                    contentType = 'videos';
                    break;
                case 'tab-post':
                    contentType = 'post';
                    break;
                case 'tab-gallery':
                    contentType = 'gallery';
                    break;
                case 'tab-tagged':
                    contentType = 'tagged';
                    break;
                default:
                    console.error(`Unknown tab ID: ${tabId}`);
                    return;
            }

            // Fetch and update the gallery with the selected content
            if (content[contentType].length === 0) {
                const data = await fetchData(apiUrls[contentType]);
                content[contentType] = data;
            }
            updateGallery(content[contentType], contentType === 'videos' ? 'video' : 'image');
        });
    });

    // Automatically load the content of the first tab (Albums or whichever you prefer)
    const postTab = document.getElementById('tab-post');
    if (postTab) {
        postTab.click();
    }
});

function disableLightboxForAlbums() {
    document.querySelectorAll(".album-link").forEach(album => {
      album.removeAttribute("data-lightbox"); // Ensure Lightbox is not applied
      album.addEventListener("click", function (event) {
        event.preventDefault(); // Stop Lightbox
        window.open(this.href, "_blank"); // Open Facebook album in a new tab
      });
    });
  }  


// Function to fetch and display event details
async function fetchPressDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const pressId = urlParams.get('pressId');

    if (!pressId) {
        console.error("Press ID not provided in the URL");
        return;
    }

    const sheetId = '1UlM_D8j1U4uj6k2JSVVAnORneBdaR61PXz28JyObMaI'; // Your Google Sheet ID
    const apiKey = 'AIzaSyAeou-CBTCSv5TVL7Gz86GSzxhNVUp9vPo'; // Your API Key
    const range = 'press!A1:F'; // The range for the 'press' sheet (including the image column)
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.values) {
            const press_data = data.values;
            const press = press_data.find(e => e[0] === pressId); // Find the press by ID

            if (press) {
                const [
                    pressId,
                    imageUrl,
                    Title,
                    Content,
                    Date,
                    Category
                ] = press;

                const pressDetailsContainer = document.getElementById("press-details-container");
                pressDetailsContainer.innerHTML = `
          <img src="${imageUrl}">
          <h2>${Title}</h2><br>
      <p><strong>Date:</strong> ${Date}</p><br>
<p>${Content}</p>

        `;
            } else {
                console.error("Press release not found");
            }
        } else {
            console.error("No data found in the sheet.");
        }
    } catch (error) {
        console.error("Error fetching press details:", error);
    }
}
fetchPressDetails();


// Function to fetch and display event details
async function fetchEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('past_eventId');

    if (!eventId) {
        console.error("Event ID not provided in the URL");
        return;
    }

    const sheetId = "1WpFmdygyuxn54RzrW17djmwldaJiS4CzCDUaluuLL_c";
    const apiKey = "AIzaSyD4cUuAH_tsWOv2Qe-xKCTmSbl4erw1oaw";
    const range_past = "Sheet2!A1:H";
    const url_past = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range_past}?key=${apiKey}`;

    try {
        const response = await fetch(url_past);
        const data = await response.json();

        if (data.values && data.values.length > 1) { // Skip header row
            const events_past = data.values.slice(1); // Exclude header row
            const event = events_past.find(e => e[0] === eventId); // Find the event by ID

            if (event) {
                const [
                    eventId,
                    eventName,
                    eventDate,
                    eventVenue,
                    eventDescription,
                    eventCategory,
                    imageMain,
                    imageExtra
                ] = event;

                const eventDetailsContainer = document.getElementById("event-details-container");
                let pastImagesHTML = '';
                if (imageExtra) {
                    // If eventImages is a string, split it into an array
                    const imagesArray = imageExtra.split(',');

                    imagesArray.forEach((imageURL, index) => {
                        // Create clickable small images
                        pastImagesHTML += `
                      <div class="image-box" onclick="openLightbox('${imageURL}')">
                          <img src="${imageURL}" alt="Event Image ${index + 1}" class="event-thumbnail">
                      </div>
                      `;
                    });
                }
                eventDetailsContainer.innerHTML = `
                <h2>${eventName}</h2>
                <p><strong>Date:</strong> ${eventDate}</p>
                <p><strong>Venue:</strong> ${eventVenue}</p>
                <p><strong>Description:</strong> ${eventDescription}</p>
                <div class="event-images">${pastImagesHTML}</div>
              `;
            } else {
                console.error("Event not found");
            }
        } else {
            console.error("No data found in the sheet.");
        }
    } catch (error) {
        console.error("Error fetching event details:", error);
    }
}

// Call the function to fetch event details
fetchEventDetails();
// Function to open the lightbox modal with the clicked image
function openLightbox(imageURL) {
    // Get the modal and set the image source
    const modal = document.getElementById("lightboxModal");
    const modalImage = modal.querySelector("img");
    modalImage.src = imageURL;

    // Display the modal
    modal.style.display = "flex";
}

// Function to close the lightbox modal
function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    modal.style.display = "none";
}
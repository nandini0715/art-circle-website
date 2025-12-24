(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}, false);

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const pressReleaseContainer = document.getElementById('pressReleaseContainer');

    // Google Sheets API Setup
    const sheetId = '1UlM_D8j1U4uj6k2JSVVAnORneBdaR61PXz28JyObMaI'; // Your Google Sheet ID
    const apiKey = 'AIzaSyAeou-CBTCSv5TVL7Gz86GSzxhNVUp9vPo'; // Your API Key
    const range = 'about!A1:C'; // The range for the 'press' sheet (excluding the date and category columns)
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    let pressReleases = []; // Store fetched press releases

    // Fetch Press Releases from Google Sheets
    const fetchPressReleases = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const rows = data.values || [];
            pressReleases = rows.map(row => ({
                imageUrl: row[0] || 'https://via.placeholder.com/300', // Image URL
                title: row[1] || 'Untitled', // Title
                content: row[2] || 'No content available.', // Content
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
                    <div class="card1">
                        <img src="${release.imageUrl}" class="card-img-top" alt="${release.title}">
                        <div class="card-body1">
                            <h5 class="card-title1">${release.title}</h5>
                            <p class="card-text1">${release.content}</p>
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
});

// Function to fetch and display events
async function fetchEvents() {
    const sheetId = "1WpFmdygyuxn54RzrW17djmwldaJiS4CzCDUaluuLL_c";
    const apiKey = "AIzaSyD4cUuAH_tsWOv2Qe-xKCTmSbl4erw1oaw";
    const range_up = "Sheet1!A1:H";
    const range_past = "Sheet2!A1:G";
    const url_up = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range_up}?key=${apiKey}`;
    const url_past = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range_past}?key=${apiKey}`;

    try {
        const response_up = await fetch(url_up);
        const data_up = await response_up.json();

        // Check if there's valid data
        if (data_up.values && data_up.values.length > 1) { // Skip header row
            const eventsContainer = document.getElementById("events-container");
            const headers1 = data_up.values[0]; // First row contains headers
            const events_up = data_up.values.slice(1); // Exclude header row

            events_up.forEach(event => {
                const eventId = event[0];
                const eventName = event[1];
                const eventDate = event[2];
                const eventTime = event[3];
                const eventVenue = event[4];
                const eventDescription = event[5];
                const organizerContact = event[6];
                const imageID = event[7];

                // Create a card for each event
                const eventCard = document.createElement("div");
                eventCard.classList.add("event-card");
                eventCard.innerHTML = `
                    <div class="event-info">
                        <img src="${imageID}">
                        <h3>${eventName}</h3>
                        <p class="event-date"><strong>Date:</strong> ${eventDate}</p>
                        <p class="event-time"><strong>Time:</strong> ${eventTime}</p>
                        <p class="event-venue"><strong>Venue:</strong> ${eventVenue}</p>
                        <button onclick="window.location.href='up-event-details.html?eventId=${eventId}'">View Details</button>
                    </div>
                `;

                // Append the card to the container
                eventsContainer.appendChild(eventCard);
            });
        } else {
            console.error("No data found in the sheet1.");
        }
    } catch (error) {
        console.error("Error fetching events:", error);
    }

    try {
        const response_past = await fetch(url_past);
        const data_past = await response_past.json();

        if (data_past.values && data_past.values.length > 1) { // Skip header row
            const pastEventsContainer = document.getElementById("past-events-container");
            const filterContainer = document.getElementById("filter-buttons"); // Add a container for filter buttons
            const headers2 = data_past.values[0]; // First row contains headers
            const events_past = data_past.values.slice(1); // Exclude header row

            // Create a map to store events by category
            const categories = { All: [] };
            events_past.forEach(P_event => {
                const past_eventId = P_event[0];
                const past_eventName = P_event[1];
                const past_eventDate = P_event[2];
                const past_eventVenue = P_event[3];
                const past_eventDescription = P_event[4];
                const past_eventCategory = P_event[5];
                const past_imageID = P_event[6];

                if (!categories[past_eventCategory]) {
                    categories[past_eventCategory] = [];
                }
                categories[past_eventCategory].push({
                    imgID: past_imageID,
                    id: past_eventId,
                    name: past_eventName,
                    date: past_eventDate,
                    venue: past_eventVenue,
                    description: past_eventDescription,
                });

                // Add to "All" category
                categories.All.push({
                    imgID: past_imageID,
                    id: past_eventId,
                    name: past_eventName,
                    date: past_eventDate,
                    venue: past_eventVenue,
                    description: past_eventDescription,
                });
            });
            // Create filter buttons
            Object.keys(categories).forEach(category => {
                const button = document.createElement("button");
                button.innerText = category;
                button.classList.add("filter-button");
                button.addEventListener("click", () => filterEvents(category, categories));
                filterContainer.appendChild(button);
            });

            // Initially display all events
            displayEvents(categories.All);
            console.log(past_eventId);
            // Function to display events
            function displayEvents(events) {
                pastEventsContainer.innerHTML = ""; // Clear existing events
                events.forEach(event => {
                    const eventCard = document.createElement("div");
                    eventCard.classList.add("past-event-card");
                    eventCard.innerHTML = `
              <div class="past-event-info">
                  <img src="${event.imgID}">
                  <h3>${event.name}</h3>
                  <p class="past-event-date"><strong>Date:</strong> ${event.date}</p>
                  <p class="past-event-venue"><strong>Venue:</strong> ${event.venue}</p>
                  <button onclick="window.location.href='event-details.html?past_eventId=${event.id}'">View Details</button>
              </div>
          `;
                    pastEventsContainer.appendChild(eventCard);
                });
            }

            // Function to filter events by category
            function filterEvents(category, categories) {
                if (categories[category]) {
                    displayEvents(categories[category]);
                }
            }

        } else {
            console.error("No data found in the sheet.");
        }
    } catch (error) {
        console.error("Error fetching events:", error);
    }

}
// Call the function on page load
fetchEvents();

//membership form
document
    .getElementById("memberForm")
    .addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const query_type = document.getElementById("query_type").value;

        const response = await fetch("http://localhost/art_circle_ratnagiri/mail_handler.php?form=membership", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, query_type }),
        });

        const result = await response.json();
        alert(result.message); // Show success/failure message
    });

//sponsorship form
document
    .getElementById("sponsorForm")
    .addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const response = await fetch("http://localhost/art_circle_ratnagiri/mail_handler.php?form=sponsorship", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, message }),
        });

        const result = await response.json();
        alert(result.message); // Show success/failure message
    });

//subscription form
document
    .getElementById("subscriptionForm")
    .addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        const response = await fetch("http://localhost/art_circle_ratnagiri/mail_handler.php?form=subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone }),
        });

        const result = await response.json();
        alert(result.message); // Show success/failure message
    });

    document
    .getElementById("contactForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent page reload

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const query_type = document.getElementById("query_type").value;
      const message = document.getElementById("message").value;

      const response = await fetch("http://localhost/art_circle_ratnagiri/mail_handler.php?form=contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, query_type, message }),
      });

      const result = await response.json();
      alert(result.message); // Show success/failure message
    });

    
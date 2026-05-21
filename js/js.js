// 1. Select the button element from the HTML
let resizeBtn = document.querySelector('#text-resize-btn');

// 2. Add an event listener to listen for when a user clicks it
resizeBtn.addEventListener('click', function() {
    
    // 3. Toggle the 'large-text' class on the body element
    let isLargeMode = document.body.classList.toggle('large-text');
    
    // 4. Update the accessibility attributes and text content based on the state
    if (isLargeMode) {
        resizeBtn.textContent = "A- Decrease Text Size";
        resizeBtn.setAttribute('aria-pressed', 'true');
        resizeBtn.setAttribute('aria-label', 'Decrease text size back to normal');
    } else {
        resizeBtn.textContent = "A+ Increase Text Size";
        resizeBtn.setAttribute('aria-pressed', 'false');
        resizeBtn.setAttribute('aria-label', 'Increase text size');
    }
});


function updateAllVenues() {
    // 1. Get the current hour from the user's browser (0 to 23)
    let currentHour = new Date().getHours();

    // 2. Create a collection of our venues and their operating hours
    let venues = [
        {
            id: "brazen-status",
            openHour: 12,
            closeHour: 23
        },
        {
            id: "doomSlice-status",
            openHour: 12,
            closeHour: 23
        },
        {
            id: "darkeys-status",
            openHour: 11,
            closeHour: 23
        },
        {
            id: "beanhive-status",
            openHour: 7,
            closeHour: 18
        },
        {
            id: "gerards-status",
            openHour: 7,
            closeHour: 16
        },
        {
            id: "rumi-status",
            openHour: 7,
            closeHour: 19
        },
        {
            id: "gino-status",
            openHour: 11,
            closeHour: 23
        },
        {
            id: "rolling-donut-status",
            openHour: 8,
            closeHour: 21
        },
        {
            id: "pier-house-status",
            openHour: 12,
            closeHour: 19
        },
        {
            id: "beshoff-status",
            openHour: 11,
            closeHour: 22
        },
        {
            id: "oconnell-status",
            openHour: 13,
            closeHour: 23
        },
        {
            id: "coffeewerk-status",
            openHour: 9,
            closeHour: 18
        },
        {
            id: "dough-status",
            openHour: 12,
            closeHour: 21
        },
        {
            id: "mcdonagh-status",
            openHour: 12,
            closeHour: 22
        },
        {
            id: "kings-status",
            openHour: 12,
            closeHour: 23
        },
        {
            id: "joe-status",
            openHour: 12,
            closeHour: 23
        },
        {
            id: "fudge-status",
            openHour: 10,
            closeHour: 17
        },
        {
            id: "aranCafe-status",
            openHour: 8,
            closeHour: 17
        },
        {
            id: "wicklow-status",
            openHour: 9,
            closeHour: 17
        },
        {
            id: "glendaCafe-status",
            openHour: 9,
            closeHour: 17
        },
        {
            id: "lynham-status",
            openHour: 8,
            closeHour: 17
        }
    ];

    // 3. Loop through each venue in our data array
    venues.forEach(function(venue) {
        // Find the specific HTML span tag for this venue
        const statusElement = document.getElementById(venue.id);

        // safety check
        if (!statusElement) return;

        // 4. Compare the current hour against this specific venue's hours
        if (currentHour >= venue.openHour && currentHour < venue.closeHour) {
            statusElement.textContent = "● Open Now";
            statusElement.className = "status-badge status-open";
        } else {
            statusElement.textContent = "● Closed Now";
            statusElement.className = "status-badge status-closed";
        }
    });
}

// Run the script cleanly once the DOM structure is fully parsed
window.addEventListener('DOMContentLoaded', updateAllVenues);
document.addEventListener("DOMContentLoaded", () => {
    // Get filter elements
    const typeFilter = document.getElementById("type-filter");
    const sourceFilter = document.getElementById("source-filter");
    const searchBar = document.getElementById("search-bar");
    const cards = document.querySelectorAll(".card");

    // Store current filter states
    let currentTypeFilter = "all";
    let currentSourceFilter = "all";
    let searchQuery = '';

    const contactBtn = document.getElementById("contactBtn");
    const contactModal = document.getElementById("contactModal");
    const closeModal = document.querySelector(".close");
  
    contactBtn.onclick = () => {
      contactModal.style.display = "flex";
    };
  
    closeModal.onclick = () => {
      contactModal.style.display = "none";
    };
  
    window.onclick = (e) => {
      if (e.target == contactModal) {
        contactModal.style.display = "none";
      }
    };

    // Function to filter cards
    function filterCards() {
        cards.forEach(card => {
            const type = card.getAttribute("data-type");
            const source = card.getAttribute("data-source");
            const title = card.querySelector("h3").textContent.toLowerCase();
            const description = card.querySelector("p").textContent.toLowerCase();

            // Check if the card matches the filters
            const matchesType = currentTypeFilter === "all" || type === currentTypeFilter;
            const matchesSource = currentSourceFilter === "all" || source === currentSourceFilter;
            const matchesSearch = title.includes(searchQuery) || description.includes(searchQuery);

            // Show or hide card based on matches
            if (matchesType && matchesSource && matchesSearch) {
                // Maintain grid display style for the card
                card.style.display = "flex";  // Ensure it stays as grid
            } else {
                card.style.display = "none"; // Hide the card if it doesn't match
            }
        });
    }

    // Type filter event
    typeFilter.addEventListener("change", (e) => {
        currentTypeFilter = e.target.value;
        filterCards();
    });

    // Source filter event
    sourceFilter.addEventListener("change", (e) => {
        currentSourceFilter = e.target.value;
        filterCards();
    });

    // Search filter event
    searchBar.addEventListener("input", (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterCards();
    });

    // Initial card display setup
    filterCards();

    
});

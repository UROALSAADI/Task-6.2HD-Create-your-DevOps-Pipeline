// Functionality for the Search Feature
function searchSite(event) {
  event.preventDefault(); // Prevent form submission
  let searchTerm = document.getElementById("search-input").value;
  
  if (searchTerm) {
    let results = document.querySelectorAll('section');
    let found = false;

    results.forEach(section => {
      if (section.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
        section.style.backgroundColor = "#e0f7fa"; // Highlight matching section
        found = true;
      } else {
        section.style.backgroundColor = ""; // Remove highlight if not matching
      }
    });

    if (!found) {
      alert("No results found for: " + searchTerm);
    }
  }
}

// Adding event listeners for search functionality
document.addEventListener("DOMContentLoaded", () => {
  let searchForm = document.querySelector(".search-form");
  
  if (searchForm) {
    searchForm.addEventListener("submit", searchSite);
  }
});

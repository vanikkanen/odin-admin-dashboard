// Connect the search icon to the search bar
const searchIcon = document.querySelector(".header-search .header-icon")
const searchBar = document.querySelector(".search-bar")

searchIcon.addEventListener("click", () => {
    searchBar.focus()
})

// For setting announcement overflow
document.querySelectorAll(".announcement p").forEach(p => {
    let maxChars = 90; // Adjust as needed
    if (p.textContent.length > maxChars) {
        p.textContent = p.textContent.slice(0, maxChars) + "...";
    }
});
// Connect the search icon to the search bar
const searchIcon = document.querySelector(".header-search .header-icon")
const searchBar = document.querySelector(".search-bar")

searchIcon.addEventListener("click", () => {
    searchBar.focus()
})
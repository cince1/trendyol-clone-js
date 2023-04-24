function SearchDropdown() {
  const searchInput = document.querySelector(".search-input");
  const searchDropdown = document.querySelector(".search-dropdown");

  searchInput.addEventListener("click", () => {
    searchDropdown.classList.add("active");
  });

  searchInput.addEventListener("blur", () => {
    searchDropdown.classList.remove("active");
  });
}

export default SearchDropdown;

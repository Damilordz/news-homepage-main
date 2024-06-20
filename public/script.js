// Get the navigation bar element 
const navBar = document.getElementById("nav-bar");
// Get the navigation menu element
const navMenu = document.querySelector(".nav-menu");
// Get the close navigation button element (close icon)
const closeNavBar = document.getElementById("close-nav");

// Add a click event listener to the navigation bar element
navBar.addEventListener("click", () => {
  // Add the 'show' class to the navigation menu to display it
  navMenu.classList.add("show");
  if (navMenu.classList.contains("show")) {
    // Disable scrolling when the navigation menu is displayed
    document.body.style.overflow = "hidden";
  }
});

// Add a click event listener to the close navigation button element
closeNavBar.addEventListener("click", () => {
  // Toggle the 'show' class on the navigation menu to hide it
  navMenu.classList.toggle("show");
  // Enable scrolling when the navigation menu is hidden
  document.body.style.overflow = "auto";
});

// Select elements from the HTML document.
const nameInput = document.querySelector("#studentName");
const greetButton = document.querySelector("#greetButton");
const greeting = document.querySelector("#greeting");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

// Listen for a click and update the page using the DOM.
greetButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    greeting.textContent = "Please enter your name first.";
    nameInput.focus();
    return;
  }

  greeting.textContent = `Hello, ${name}! Welcome to Web Technology.`;
});

// Toggle the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the mobile menu after selecting a navigation link.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

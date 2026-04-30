const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");

  // Mobile: Click to toggle dropdown
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("active");
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    if (!dropdown.contains(e.target) && !toggle.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });
});

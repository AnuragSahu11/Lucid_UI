const darkMode = document.getElementById("dark-mode");

let isDarkMode = false;

darkMode.addEventListener("click", () =>
  document.body.classList.toggle("dark-theme")
);

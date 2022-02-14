// dark mode switch

const darkMode = document.querySelectorAll(".dark-mode");

let isDarkMode = false;

darkMode.forEach((item) =>
  item.addEventListener("click", () =>
    document.body.classList.toggle("dark-theme")
  )
);

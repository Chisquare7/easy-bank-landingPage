function toggleMobileNav(menu) {
  menu.classList.toggle("open");

  const mobileMenu = document.querySelector(".mobile__menu");
  const overlay = document.querySelector(".page__overlay");

  if (menu.classList.contains("open")) {
    mobileMenu.style.display = "flex";
    overlay.style.display = "block";
  } else {
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
  }

  overlay.addEventListener("click", function () {
    menu.classList.remove("open");
    mobileMenu.style.display = "none";
    overlay.style.display = "none";
  });
}

// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  function closeMenu() {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 650) closeMenu();
  });
}

// Projects page: Load more and Show less
const loadMoreWrap = document.querySelector("#load-more-wrap");
const showLessWrap = document.querySelector("#show-less-wrap");
const loadMoreButton = document.querySelector("#load-more-projects");
const showLessButton = document.querySelector("#show-less-projects");

const extraProjects = ["freshcart", "weather", "aether"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (
  loadMoreWrap &&
  showLessWrap &&
  loadMoreButton &&
  showLessButton &&
  extraProjects.length === 3
) {
  loadMoreButton.addEventListener("click", () => {
    extraProjects.forEach((project) => {
      project.hidden = false;
    });

    loadMoreButton.setAttribute("aria-expanded", "true");
    loadMoreWrap.hidden = true;
    showLessWrap.hidden = false;
  });

  showLessButton.addEventListener("click", () => {
    extraProjects.forEach((project) => {
      project.hidden = true;
    });

    loadMoreButton.setAttribute("aria-expanded", "false");
    showLessWrap.hidden = true;
    loadMoreWrap.hidden = false;

    loadMoreButton.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
}
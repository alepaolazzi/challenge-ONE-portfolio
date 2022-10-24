export default function initScroll() {
  const linksInternos = document.querySelectorAll("[data-link]");

  function scrollSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop - 70;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollSection);
  });
}

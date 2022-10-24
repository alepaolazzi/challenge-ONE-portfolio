export default function initScrollWindow() {
  const sections = document.querySelectorAll("[data-aparece]");
  const links = document.querySelectorAll("[data-animacao]");
  function mostraDistancia() {
    sections.forEach((section) => {
      const topo = section.offsetTop - 70;
      const sectionAparece = topo < Math.round(window.scrollY) + 50;
      if (sectionAparece) {
        links.forEach((link) => {
          const linkHref = link.getAttribute("href");
          const linkLimpo = linkHref.replace("#", "");
          if (linkLimpo == section.parentNode.getAttribute("id")) {
            link.classList.add("active");
          } else if (linkLimpo !== section.parentNode.getAttribute("id")) {
            link.classList.remove("active");
          }
        });
      }
    });
  }
  window.addEventListener("scroll", mostraDistancia);
}

// active

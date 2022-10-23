export default function initAnima() {
  const sections = document.querySelectorAll("[data-anima]");
  const parteWindow = window.innerHeight * 0.7;
  if (sections.length) {
    function scrollAnimado() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisivel = sectionTop - parteWindow < 0;
        if (sectionVisivel) {
          section.classList.add("visivel");
        } else {
          section.classList.remove("visivel");
        }
      });
    }
    scrollAnimado();
    window.addEventListener("scroll", scrollAnimado);
  }
}

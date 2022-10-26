export default function initDarkMode() {
  const btn = document.querySelector("[data-modo]");
  const img = document.querySelector("[data-modo] img");
  function modoEscuro() {
    const bodyClass = document.body.classList;
    document.body.classList.toggle("dark");
    if (bodyClass.length == 0) {
      img.setAttribute("src", "./assets/img/lua.png");
    } else {
      img.setAttribute("src", "./assets/img/sol.png");
    }
  }

  btn.addEventListener("click", modoEscuro);
}

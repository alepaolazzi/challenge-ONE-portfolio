export default function initDarkMode() {
  const btn = document.querySelector("[data-modo]");
  const img = document.querySelector("[data-modo] img");
  function modoEscuro() {
    const bodyClass = document.body.classList;
    document.body.classList.toggle("dark");
    if (bodyClass.contains("dark")) {
      img.setAttribute("src", "./assets/img/sol.png");
      localStorage.setItem("preferencia", bodyClass[0]);
    } else {
      img.setAttribute("src", "./assets/img/lua.png");
      localStorage.setItem("preferencia", bodyClass[0]);
    }
  }

  function modoPreferencia() {
    if (localStorage.getItem("preferencia") == "dark") {
      document.body.classList.add("dark");
      img.setAttribute("src", "./assets/img/sol.png");
    } else {
      document.body.classList.remove("dark");
    }
  }
  modoPreferencia();

  btn.addEventListener("click", modoEscuro);
}

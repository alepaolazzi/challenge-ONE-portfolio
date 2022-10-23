export default function initcabecalhoFixo() {
  function fixaCabecalho() {
    const cabecalho = document.querySelector("[data-cabecalho]");
    const cabecalhoFixo = document.querySelector('[data-cabecalho="fixo"]');
    const cabecalhoTopo = Math.round(cabecalho.getBoundingClientRect().top);
    if (cabecalhoTopo < -10) {
      cabecalhoFixo.classList.add("detalheBorda");
    } else if (cabecalhoTopo > -10) {
      cabecalhoFixo.classList.remove("detalheBorda");
    }
  }
  fixaCabecalho();
  window.addEventListener("scroll", fixaCabecalho);
}

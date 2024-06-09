document.getElementById("verMaisBtn").addEventListener("click", function () {
  var extraBio = document.getElementById("extraBio");
  if (extraBio.style.display === "none" || extraBio.style.display === "") {
    extraBio.style.display = "block";
    this.textContent = "Ver Menos";
  } else {
    extraBio.style.display = "none";
    this.textContent = "Ver Mais";
  }
});

// Mostrar o botão quando o usuário rolar para baixo 20px
window.onscroll = function () {
  var backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "flex";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Quando o usuário clicar no botão, rolar para o topo da página
document.getElementById("backToTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const botaoAlterarTema = document.getElementById("botao-mudar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocarTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroAtivo) {
        imagemBotaoTrocarTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocarTema.setAttribute("src", "./src/imagens/moon.png");

    }
});



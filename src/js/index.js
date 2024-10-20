
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");


function identificarCliqueNoElementoDaListagem() {
    listaSelecaoPokedevs.forEach(pokedev => {
        pokedev.addEventListener("click", () => {
            esconderCartaoPokedevNaoSelecionado();
            const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);
            desativarPokedevNaoSelecionadoNaListagem();
            ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
        });
    });
}

function esconderCartaoPokedevNaoSelecionado() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function desativarPokedevNaoSelecionadoNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

identificarCliqueNoElementoDaListagem();
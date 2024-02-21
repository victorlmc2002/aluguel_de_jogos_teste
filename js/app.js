function alterarStatus(numJogo){

    alterarImagemBotao("game-" + numJogo);

}

function alterarImagemBotao(tag){

    let jogo = document.getElementById(tag);
    let imagem = jogo.querySelector("div");
    let botao = jogo.querySelector("a");
    
    if((imagem.classList.contains("dashboard__item__img--rented"))){
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.innerHTML = "Alugar";
    }

    else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.innerHTML = "Devolver";
    }
}

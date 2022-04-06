function seleciona(elemento){
    elemento.classList.add("virar");
}
let modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))

while(isNaN(modoDeJogo) || modoDeJogo%2!=0 || modoDeJogo<3|| modoDeJogo>14 ){
    modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
}


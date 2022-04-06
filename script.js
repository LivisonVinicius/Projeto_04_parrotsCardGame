let arranjo = [".bros",".explody",".fiesta",".metal", ".revertit",".triplets",".unicorn"]
function seleciona(elemento){
    elemento.classList.add("virar");
}
let modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
let contador = 0
while(isNaN(modoDeJogo) || modoDeJogo%2!=0 || modoDeJogo<3|| modoDeJogo>14 ){
    modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
}
arranjo=arranjo.slice(7-modoDeJogo/2)
while(contador<arranjo.lenght){
    const localizador1st= document.querySelector(arranjo[contador]).firstChild
    const localizador2nd= document.querySelector(arranjo[contador]).lastChild
    localizador1st =localizador1st.classList.remove("escondido")
    localizador2nd =localizador2nd.classList.remove("escondido")
    contador=contador+1
}
console.log(arranjo[contador])



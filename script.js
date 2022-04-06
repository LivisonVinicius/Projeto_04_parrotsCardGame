let modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
let contador = 0
while(isNaN(modoDeJogo) || modoDeJogo%2!=0 || modoDeJogo<3|| modoDeJogo>14 ){
    modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
}
arranjo=arranjo.slice(7-modoDeJogo/2)
let arranjo = [".bros",".explody",".fiesta",".metal", ".revertit",".triplets",".unicorn"]
function seleciona(elemento){
    elemento.classList.add("virar");
    if(Number(document.querySelectorAll(".virar"))%2 !=0){
        elemento.classList.add("verificando1")
    }else{
        elemento.classList.add("verificando2")
    }
    verifica()
}
function verifica(){
    if(document.querySelector(".verificando1 .back-face img").src!=document.querySelector(".verificando2 .back-face img").src){
        document.querySelector(".verificando1").classList.remove("virar")
        document.querySelector(".verificando2").classList.remove("virar")
    }
    document.querySelector(".verificando1").classList.remove("verificando1")
    document.querySelector(".verificando2").classList.remove("verificando2")
}

// while(contador<arranjo.lenght){
//     const localizador1st= document.querySelector(arranjo[contador])
//     const localizador2nd= document.querySelector(arranjo[contador])
//     localizador1st =localizador1st.classList.remove("escondido")
//     contador=contador+1
// }
// console.log(document.querySelector(`.bros:last-of-type`))




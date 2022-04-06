let contador = 0
let counter = 0
let contadorReset=0
let numJogadas=0
let arranjoClasse = [".bobrossparrot",".explodyparrot",".fiestaparrot",".metalparrot", ".revertitparrot",".tripletsparrot",".unicornparrot"]
inicioDoJogo()
function inicioDoJogo(){
    let modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
    while(isNaN(modoDeJogo) || modoDeJogo%2!=0 || modoDeJogo<3|| modoDeJogo>14 ){
        modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
    }
    contador=0
    counter=0
    numJogadas=0
    arranjoClasse = [".bobrossparrot",".explodyparrot",".fiestaparrot",".metalparrot", ".revertitparrot",".tripletsparrot",".unicornparrot"]
    arranjoClasse.sort(parametro)
    let arranjoGif=[`imagens/${arranjoClasse[0].replace(".","")}.gif`,`imagens/${arranjoClasse[0].replace(".","")}.gif`,`imagens/${arranjoClasse[1].replace(".","")}.gif`,`imagens/${arranjoClasse[1].replace(".","")}.gif`,`imagens/${arranjoClasse[2].replace(".","")}.gif`,`imagens/${arranjoClasse[2].replace(".","")}.gif`,`imagens/${arranjoClasse[3].replace(".","")}.gif`,`imagens/${arranjoClasse[3].replace(".","")}.gif`, `imagens/${arranjoClasse[4].replace(".","")}.gif`,`imagens/${arranjoClasse[4].replace(".","")}.gif`,`imagens/${arranjoClasse[5].replace(".","")}.gif`,`imagens/${arranjoClasse[5].replace(".","")}.gif`,`imagens/${arranjoClasse[6].replace(".","")}.gif`,`imagens/${arranjoClasse[6].replace(".","")}.gif`]
    arranjoClasse=arranjoClasse.slice(7-modoDeJogo/2)
    arranjoGif=arranjoGif.slice(14-modoDeJogo)
    arranjoGif.sort(parametro)
    while(contador<arranjoClasse.length){
        const localizador1st= document.querySelector(arranjoClasse[contador])
        const localizador2nd= document.querySelectorAll(arranjoClasse[contador])[1]
        localizador1st.classList.remove("escondido")
        localizador2nd.classList.remove("escondido")
        localizador1st.querySelector(".back-face img").src=arranjoGif[counter+1]
        localizador2nd.querySelector(".back-face img").src=arranjoGif[counter]
        counter+=+2
        contador=contador+1
    }
}
function parametro(){
    return Math.random()-0.5;
}

function seleciona(elemento){
    elemento.classList.add("virar");
    if(Number(document.querySelectorAll(".virar").length)%2 !==0){
        elemento.classList.add("verificando1")
    }if(Number(document.querySelectorAll(".virar").length)%2 ==0){
        elemento.classList.add("verificando2")
        setTimeout(verifica,1000)
    }numJogadas=numJogadas+1
}
function verifica(){
    if(document.querySelector(".verificando1 .back-face img").src!==document.querySelector(".verificando2 .back-face img").src){
        document.querySelector(".verificando1").classList.remove("virar")
        document.querySelector(".verificando2").classList.remove("virar")
    }
    document.querySelector(".verificando1").classList.remove("verificando1")
    document.querySelector(".verificando2").classList.remove("verificando2")
    if (document.querySelectorAll(".virar").length==arranjoClasse.length*2){
        alert(`Você ganhou em ${numJogadas} jogadas!`)
    //     let jogarDenovo=prompt("Quer jogar denovo?").toLowerCase()
    //     if (jogarDenovo=="sim"){
    //         while(document.querySelectorAll(".escondido").length<document.querySelectorAll(".card")){
    //             let cartas=document.querySelector("main .card")
    //             cartas.classList.add("escondido")
    //             while(document.querySelectorAll(".virar").length!=0){
    //                 document.querySelector(".virar").classList.remove("virar")
    //             }
    //             contadorReset++
    //         }
    //         inicioDoJogo()
    //     }
    }
}
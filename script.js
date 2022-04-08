let contador = 0
let counter = 0
let main=document.querySelector("main")
let numJogadas=0
let segundos=document.querySelector(".segundos")
let arranjoGif;
let arranjoClasse;

function escolhaTema(posicao){
    if(posicao=="parrot"){
        arranjoClasse= [".bobrossparrot",".explodyparrot",".fiestaparrot",".metalparrot", ".revertitparrot",".tripletsparrot",".unicornparrot"]
        inicioDoJogo()
        document.querySelector("header h1").innerHTML="Parrot Game"
    }
    if(posicao=="naruto"){
        arranjoClasse= [".chidorinaruto",".itachinaruto",".madaranaruto",".minatonaruto",".sadnaruto",".shynaruto",".tobinaruto"]
        inicioDoJogo()
        document.querySelector("header h1").innerHTML="Naruto Game"
    }
    if(posicao=="haikyuu"){
        arranjoClasse= [".figthhaikyuu",".drophaikyuu",".recievehaikyuu",".confhaikyuu",".teamhaikyuu",".tsukishimahaikyuu",".liberohaikyuu"]
        inicioDoJogo()
        document.querySelector("header h1").innerHTML="Haikyuu Game"
    }
    if(posicao=="steven"){
        arranjoClasse= [".butterfliessteven",".blushsteven",".crysteven",".stevensteven",".carsteven",".rubysteven",".cyclopesteven"]
        inicioDoJogo()
        document.querySelector("header h1").innerHTML="Steven Universe Game"
    }
    document.querySelector("header").classList.remove("escondido")
    document.querySelector(".tema").classList.add("escondido")
    document.querySelector("main").classList.remove("escondido")
}

function inicioDoJogo(){
    segundos.innerHTML=0
    main.innerHTML=""
    let modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
    while(isNaN(modoDeJogo) || modoDeJogo%2!=0 || modoDeJogo<3|| modoDeJogo>14 ){
        modoDeJogo = Number(prompt("Com quantas cartas quer jogar?",4))
    }
    contador=0
    counter=0
    numJogadas=0
    arranjoClasse.sort(parametro)
    arranjoGif=[`imagens/${arranjoClasse[0].replace(".","")}.gif`,`imagens/${arranjoClasse[0].replace(".","")}.gif`,`imagens/${arranjoClasse[1].replace(".","")}.gif`,`imagens/${arranjoClasse[1].replace(".","")}.gif`,`imagens/${arranjoClasse[2].replace(".","")}.gif`,`imagens/${arranjoClasse[2].replace(".","")}.gif`,`imagens/${arranjoClasse[3].replace(".","")}.gif`,`imagens/${arranjoClasse[3].replace(".","")}.gif`, `imagens/${arranjoClasse[4].replace(".","")}.gif`,`imagens/${arranjoClasse[4].replace(".","")}.gif`,`imagens/${arranjoClasse[5].replace(".","")}.gif`,`imagens/${arranjoClasse[5].replace(".","")}.gif`,`imagens/${arranjoClasse[6].replace(".","")}.gif`,`imagens/${arranjoClasse[6].replace(".","")}.gif`]
    arranjoClasse=arranjoClasse.slice(7-modoDeJogo/2)
    arranjoGif=arranjoGif.slice(14-modoDeJogo)
    arranjoGif.sort(parametro)
    for(let i=0; i<arranjoGif.length;i++){
        let recebeVariavel=
        `<div class= "card" onclick="seleciona(this)">
            <div class="front-face face">
              <img src="imagens/front.png">
            </div>
            <div class="back-face face">
              <img src="${arranjoGif[i]}">
            </div>
        </div>`
        main.innerHTML+=recebeVariavel
    }
}
timer()
function parametro(){
    return Math.random()-0.5;
}

function seleciona(elemento){
    if (document.querySelectorAll(".virar").length<2) {
        elemento.classList.add("virar");
    }else{
        return
    }
    if(Number(document.querySelectorAll(".virar").length)%2 !==0){
        elemento.classList.add("verificando1")
    }if(Number(document.querySelectorAll(".virar").length)%2 ==0){
        elemento.classList.add("verificando2")
        setTimeout(verifica,1000)
    }
}
function verifica(){
    if(document.querySelector(".verificando1 .back-face img").src!==document.querySelector(".verificando2 .back-face img").src){
        document.querySelector(".verificando1").classList.remove("virar")
        document.querySelector(".verificando2").classList.remove("virar")
    }
    if(document.querySelector(".verificando1 .back-face img").src===document.querySelector(".verificando2 .back-face img").src){
        document.querySelector(".verificando1").classList.add("virada")
        document.querySelector(".verificando2").classList.add("virada")
        document.querySelector(".verificando1").classList.remove("virar")
        document.querySelector(".verificando2").classList.remove("virar")
    }
    document.querySelector(".verificando1").classList.remove("verificando1")
    document.querySelector(".verificando2").classList.remove("verificando2")
    numJogadas=numJogadas+2
    if (document.querySelectorAll(".virada").length==arranjoClasse.length*2){
        alert(`Você ganhou em ${numJogadas} jogadas e ${segundos.innerHTML.toString()} segundos!`)
        let jogarDenovo=prompt("Quer jogar novamente? sim/não","sim").toLowerCase()
        if (jogarDenovo=="sim"){
            segundos.innerHTML=0
            document.querySelector("main").classList.add("escondido")
            document.querySelector("header").classList.add("escondido")
            document.querySelector(".tema").classList.remove("escondido") 
        }
        if (jogarDenovo!="sim") {
            alert("Que pena :(")
        }
    }
}
function timer(){
    setInterval(function(){
        if(document.querySelectorAll(".virada").length<arranjoGif.length){
            segundos.innerHTML++
        }
    },1000)
    clearInterval(timer)
}







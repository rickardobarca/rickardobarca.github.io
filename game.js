alert("inicia el juego")
alert("elige tu ataque")
const player = prompt("elige 0:piedra 1:papel 2:tijeras");
const play = document.createElement("img");
const beat = document.createElement("img");
const container = document.querySelector(".container");
const resultado = document.createElement("div");
const cont = document.querySelector(".cont");


cont.appendChild(play);
cont.appendChild(beat);
container.appendChild(resultado);



play.classList.add("play");
beat.classList.add("beat");
resultado.classList.add("resultado");

if(player == 0){
    alert("elegiste piedra")
    play.setAttribute("src","piedra.jpg")
}
else if(player == 1){
    alert("elegiste papel")
    play.setAttribute("src","papel.jpg")
}
else if(player == 2){
    alert("elegiste tijeras")
    play.setAttribute("src","tijeras.jpg")   
}

let enemy = Math.round(Math.random() * 2);

if(enemy == 0){
    alert("el enemigo eligio piedra")
    beat.setAttribute("src","piedra.jpg")
    
}
else if(enemy == 1){
    alert("el enemigo eligio papel")
    beat.setAttribute("src","papel.jpg")
}
else if(enemy == 2){
    alert("el enemigo eligio tijeras")
    beat.setAttribute("src","tijeras.jpg")   
}


if(player == enemy){
    alert("empate")
    play.classList.add("equal");
    beat.classList.add("equal");
    resultado.textContent ="empate"
}
else if(player == 0 && enemy == 2){
    alert("ganaste")
    play.classList.add("winner");
    beat.classList.add("loser");
    resultado.textContent ="ganaste"
    
}
else if(player == 1 && enemy == 0){
    alert("ganaste")
    play.classList.add("winner");
    beat.classList.add("loser");
    resultado.textContent ="ganaste"
    
}
else if(player == 2 && enemy == 1){
    alert("ganaste")
    play.classList.add("winner");
    beat.classList.add("loser");
    resultado.textContent ="ganaste"
    
    
}

else if(enemy == 0 && player == 2){
    alert("perdiste")
    play.classList.add("loser");
    beat.classList.add("winner");
    resultado.textContent ="perdiste"
    
}
else if(enemy == 1 && player == 0){
    alert("perdiste")
    play.classList.add("loser");
    beat.classList.add("winner");
    resultado.textContent ="perdiste"
    
}
else if( enemy== 2 && player == 1){
    alert("perdiste")
    play.classList.add("loser");
    beat.classList.add("winner");
    resultado.textContent ="perdiste"
    
}



if(player == ""){
    alert("juan es calvo")
}


let eleccionJugador1;

eleccionJugador1 = prompt("Elige cara o cruz escribiendolo aquí");
alert(eleccionJugador1)

if (eleccionJugador1 == "cara"){
    eleccionJugador1 = 0;
} else {
    eleccionJugador1 = 1;
}
var eleccionJugador2 = Math.round(Math.random()*1);

console.log("Jugador 1 elige: " +eleccionJugador1);

 console.log("Jugador 2 elige: " +eleccionJugador2);

 
console.log("Cara = 0, Cruz = 1");

let monedaAlAire = Math.round(Math.random()*1);

if (monedaAlAire == eleccionJugador1){
    if(monedaAlAire == 1){
        monedaAlAire = "CRUZ"
    } else{
        monedaAlAire = "CARA"
    }
    document.getElementById("anuncio").innerHTML = "HAS GANADO UN PONNY"
    document.getElementById("moneda").innerHTML = "EN LA MONEDA HA SALIDO " + monedaAlAire
} else {
    if(monedaAlAire == 1){
        monedaAlAire = "CRUZ"
    } else{
        monedaAlAire = "CARA"
    }
    document.getElementById("moneda").innerHTML = "EN LA MONEDA HA SALIDO " + monedaAlAire
    document.getElementById("anuncio").innerHTML = "EL GANADOR ES TERMINATOR 'LA MAKINA' "
}


// Declarar variables
function init(){
    var resultado = document.getElementById("resultado")
    var reset = document.getElementById("reset")
    var igual = document.getElementById("igual")
    var mas = document.getElementById("mas")
    var menos = document.getElementById("menos")
    var multiplicar = document.getElementById("multiplicar")
    var dividir = document.getElementById("dividir")
    var nueve = document.getElementById("nueve")
    var ocho = document.getElementById("ocho")
    var siete = document.getElementById("siete")
    var seis = document.getElementById("seis")
    var cinco = document.getElementById("cinco")
    var cuatro = document.getElementById("cuatro")
    var tres = document.getElementById("tres")
    var dos = document.getElementById("dos")
    var uno = document.getElementById("uno")
    var cero = document.getElementById("cero")
}

// Eventos

cero.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "0"
}
uno.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "1"
}
dos.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "2"
}
tres.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "3"
}
cuatro.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "4"
}
cinco.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "5"
}
seis.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "6"
}
siete.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "7"
}
ocho.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "8"
}
nueve.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "9"
}
nueve.onclick = function(e){
    reset();
}















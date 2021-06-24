function generarColor (){
    // var entradaTexto = document.getElementById("entradaTexto").value

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
           return color;
}
    console.log(generarColor())

function cambiarColor(){
       document.querySelector("input").style.backgroundColor = generarColor()
}
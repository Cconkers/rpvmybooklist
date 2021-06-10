
var botonAñadir = document.getElementById("botonAdd")

botonAñadir.addEventListener('click', function () {
    var data = getSelectValue();
var textoTarea = document.getElementById("escribirTarea").value
    document.getElementById("lista").innerHTML += ' <li class="list-group-item d-flex justify-content-between align-items-center"><input type="checkbox"> ' + textoTarea + ' <span class="badge bg-primary rounded-pill">'+ data.guardar  + '</span></li> '

})

function getSelectValue(){
    return{
guardar: document.getElementById("selectorTipo").value
    }
}

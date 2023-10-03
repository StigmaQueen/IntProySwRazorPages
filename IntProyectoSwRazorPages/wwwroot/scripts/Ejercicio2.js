const pregunta = document.querySelector("#pregunta");
const escala = document.querySelector(".escala");
const btn = document.querySelector("#btn");


pregunta.hidden = true;
escala.style.display = "none";
btn.hidden = true;

var api = "https://integracion.itesrc.net/api/encuesta";
var lista = null, actual, seleccionado;
async function descargarEncuesta() {

    let response = await fetch(api);
    if (response.ok)
    {
        lista = await response.json();
        actual = 0;
        mostrarPregunta();
        pregunta.hidden = false;
        escala.style.display = null;
        btn.hidden = false;
        
    }
    else
    {
        console.log("Ha ocurrido un error al descargar la encuesta");
    }
}

function mostrarPregunta() {
    let obj = lista[actual];
    pregunta.textContent = obj.pregunta;


}
escala.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") {
        if (seleccionado)
        {
            seleccionado.classList.remove("SELECTED");
        }
        e.target.classList("SELECTED");
        seleccionado = e.target;
    }
});

descargarEncuesta();
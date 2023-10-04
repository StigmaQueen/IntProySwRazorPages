const pregunta = document.querySelector("#pregunta");
const escala = document.querySelector(".escala");
const boton = document.querySelector("#btn");
const loader = document.querySelector("#loader");


var basUrl = "https://integracion.itesrc.net/api/encuesta";
var listaPreguntas = null, actual, seleccionado, respuestas=[];

pregunta.hidden = true;
escala.style.display = 'none';
boton.hidden = true;


async function descargarEncuesta() {
    let response = await fetch(basUrl);
    if (response.ok) {
        listaPreguntas = await response.json();
        actual = 0;
        mostrarPregunta();
        loader.hidden = true;

        //mostrar controles
        pregunta.hidden = false;
        escala.style.display = null;
        boton.hidden = false;
    }
    else {
        console.log("Ha ocurrido un error al descargar la encuesta.");
    }
}

function mostrarPregunta() {
    let objeto = listaPreguntas[actual];
    pregunta.textContent = objeto.pregunta;
    if (seleccionado) {
        seleccionado.classList.remove("selected");
        seleccionado = null;
    }
    
};

escala.addEventListener("click", function (e) {
    if (e.target.tagName == "IMG") {
        if (seleccionado) {
            seleccionado.classList.remove("selected");
        }
        e.target.classList.add("selected");
        seleccionado = e.target;
    }
});

btn.addEventListener("click", function () {
    if (seleccionado) {
        let resp = { idPregunta: listaPreguntas[actual].id, valor: seleccionado.dataset.valor };
        respuestas.push(resp);
        //verificar si quedan preguntas
        if (actual < listaPreguntas.length - 1) {
            actual++;

            mostrarPregunta();
            btn.value = actual == listaPreguntas.length - 1 ? "TERMINAR" : "SIGUIENTE";
        }
        else {
            pregunta.hidden = true;
            escala.style.display = "none";
            boton.hidden = true;
            loader.hidden = false;

           

        }
    }
    else {
        alert("Debe seleccionar una respuesta para continuar.");
    }
});

descargarEncuesta();
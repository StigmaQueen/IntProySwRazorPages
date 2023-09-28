//https://integracion.itesrc.net/api/panes
//las operaciones tienen que ser asyncronas-asyncronia es desconocer el tiempo que le va a tomar a la operación realizar una tarea-//
//hacer un request

var listaPanecillos;
const botonera = document.querySelector(".panes div");

async function descargarProcuctos() {
    let response = await fetch("https://integracion.itesrc.net/api/panes");

    if (response.ok) {
        ///Recuperar los datos
        listaPanecillos = await response.json();
        console.log(content);
    }
}

function Botoneria()
{

    listaPanecillos.forEach(x => {
        let btn = document.createElement("BUTTON");
        btn.dataset.id = x.id;
        let img = document.createElement("IMG");
        img.src = x.imagen;
        let txt = document.createTextNode("$" + x.precio.toFixed(2));
        btn.appendChild(img, txt);
        botonera.append(btn);
    });

}

botonera.addEventListener("clik", function (e) {
    if (e.target.tagName == "BUTTON" | e.target.tagName == "IMG") {
        alert(e.target.tagName.id);
       
    }
});

descargarProcuctos();
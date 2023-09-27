//https://integracion.itesrc.net/api/panes
//las operaciones tienen que ser asyncronas-asyncronia es desconocer el tiempo que le va a tomar a la operación realizar una tarea-//
//hacer un request

var listaPanecillos;

async function descargarProcuctos()
{
    let response = await fetch("https://integracion.itesrc.net/api/panes");

    if (response.ok)
    {
        ///Recuperar los datos
        listaPanecillos= await response.json();
        console.log(content);
    }
}

descargarProcuctos();
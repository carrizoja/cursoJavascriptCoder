//GET
function obtenerDatos() {
    const URLJSON = "../nosotros.json";
    $.get(URLJSON).done(function(resultado, estado) {
        console.log("El estado que retorna la API es: " + estado);
        if (estado == "success") {
            let nosotros = resultado.usuarios;
            nosotros.forEach(persona => {
                $("#nosotros").append("<tr><th>" + persona.nombre + "</th><td>" + persona.puesto + "</td><td><img src=" + persona.image + " class='imagenes'></td></tr>");
                $(".imagenes").css("width", "200px");
                $(".imagenes").css("height", "200px");
            });
        }
    });
}

obtenerDatos();
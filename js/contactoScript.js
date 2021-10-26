//Código JS para el formulario de contacto

// Tomo los campos y los hago variables

let campoNombre = document.getElementById("txtNombre");
let campoEmail = document.getElementById("txtEmail");
let campoAsunto = document.getElementById("txtAsunto");
let campoMensaje = document.getElementById("txtMensaje");


//EVENTO SUBMIT
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);
let div = document.createElement('div');
div.id = 'content';

function validarFormulario(ev) {
    // Validación campo Nombre
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    debugger
    if (campoNombre.value != "") {
        if (isNaN(campoNombre.value)) {
            if (campoNombre.value.match(specialChars)) {
                div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> El campo nombre no debe poseer caracteres especiales </h2></center>`;
                formulario.appendChild(div);
                ev.preventDefault();
            } else {
                if (campoEmail.value != "") {
                    var filtroMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if (!filtroMail.test(campoEmail.value)) {
                        div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> El campo mail no es válido </h2></center>`;
                        formulario.appendChild(div);
                        ev.preventDefault();
                        campoEmail.focus;
                    } else {
                        if (campoAsunto.value != "") {
                            if (campoMensaje.value != "") {
                                div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> ¡Envío exitoso! Nos comunicaremos con vos a la brevedad </h2></center>`;
                                formulario.appendChild(div);
                                ev.preventDefault();
                            } else {
                                div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> El campo mensaje no debe quedar vacío </h2></center>`;
                                formulario.appendChild(div);
                                ev.preventDefault();
                            }
                        } else {
                            div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> El campo asunto no debe quedar vacío </h2></center>`;
                            formulario.appendChild(div);
                            ev.preventDefault();
                        }
                    }
                } else {
                    div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> El campo mail no debe quedar vacío </h2></center>`;
                    formulario.appendChild(div);
                    ev.preventDefault();
                }
            }
        } else {
            div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> El campo nombre no debe poseer un número </h2></center>`;
            formulario.appendChild(div);
            ev.preventDefault();
        }
    } else {
        div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
        src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> El campo nombre no debe quedar vacío </h2></center>`;
        formulario.appendChild(div);
        ev.preventDefault();
    }
}
// JS para el Login

$(document).ready(function() {
    $("#btnEnviar").click(function() {

        validarRegistro();
    });

    function validarRegistro() {
        debugger
        var nombre = $("#txtNombre").val();
        var email = $("#txtEmail").val();
        var pass = $("#txtPassword").val();
        var repass = $("#txtRepPassword").val();
        $("#p1").text("");
        $("#p2").text("");
        $("#p3").text("");
        $("#p4").text("");
        comprobarCampoNombre();
        comprobarCampoEmail();
        comprobarCampoPassword();
        comprobarCampoRepPassword();

        if ((comprobarCampoNombre() == true) && (comprobarCampoEmail() == true) && (comprobarCampoPassword() == true) && (comprobarCampoRepPassword() == true)) {
            nombre.value = "";
            email.value = "";
            pass.value = "";
            repass.value = "";
            swal.fire({
                title: "¡Registro Exitoso!",
                text: "Será redireccionado a la página de compras",
                type: "success"
            }).then(function() {
                window.location = "comprar.html";
            });
        }

        function comprobarCampoNombre() {
            if (nombre.length != "") {
                var regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
                /* var regexNombre = /^[A-Za-z\s]+$/; */
                var esValido = regexNombre.test(nombre);
                if (!esValido) {
                    $("#p1").text("* El campo Nombre no puede poseer números ni caracteres especiales");
                    $("#txtNombre").focus();
                    return false;
                }
            } else {
                $("#p1").text("* El campo nombre no puede quedar vacío");
                $("#txtNombre").focus();
                return false;
            }
            return true;
        }

        function comprobarCampoEmail() {
            if (email.length != "") {
                var regexEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                var esValido = regexEmail.test(email);
                if (!esValido) {
                    $("#p2").text("* El campo Email no posee un email válido (***@***.com)");
                    $("#txtEmail").focus();
                    return false;
                }
            } else {
                $("#p2").text("* El campo Email no puede quedar vacío");
                $("#txtEmail").focus();
                return false;
            }
            return true;
        }

        function comprobarCampoPassword() {
            if (pass.length != "") {
                if (pass.length > 7) {
                    var regexAlfanumerico = /^[A-Za-z0-9]+$/;
                    var esValido = regexAlfanumerico.test(pass);
                    if (esValido) {
                        $("#p3").text("* El Password debe poseer al menos un caracter especial");
                        $("#txtPassword").focus();
                        return false;
                    }
                } else {
                    $("#p3").text("* El Password debe poseer un mínimo de 8 caracteres");
                    $("#txtPassword").focus();
                    return false;
                }
            } else {
                $("#p3").text("* El campo Password no puede quedar vacío");
                $("#txtPassword").focus();
                return false;
            }
            return true;
        }

        function comprobarCampoRepPassword() {
            if (repass.length != "") {
                if (repass != pass) {
                    $("#p4").text("* Las contraseñas no coinciden");
                    $("#txtRepPassword").focus();
                    return false;
                }
            } else {
                $("#p4").text("* El campo Repetir Password no puede quedar vacío");
                $("#txtRepPassword").focus();
                return false;
            }
            return true;
        }
    }
});
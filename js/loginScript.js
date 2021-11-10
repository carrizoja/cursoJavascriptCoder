// JS para el Login

$(document).ready(function() {
    $("#btnEnviar").click(function() {

        validarRegistro();
    });

    function validarRegistro() {
        var username = $("#txtNombre").val();
        var email = $("#txtEmail").val();
        var pass = $("#txtPassword").val();
        var repass = $("#txtRepPassword").val();
        $("#p1").text("");
        $("#p2").text("");
        $("#p3").text("");
        $("#p4").text("");
        $("#txtNombre").removeClass('errorClass').removeClass('okClass');
        $("#txtEmail").removeClass('errorClass').removeClass('okClass');
        $("#txtPassword").removeClass('errorClass').removeClass('okClass');
        $("#txtRepPassword").removeClass('errorClass').removeClass('okClass');
        comprobarCampoNombre();
        comprobarCampoEmail();
        comprobarCampoPassword();
        comprobarCampoRepPassword();

        if ((comprobarCampoNombre() == true) && (comprobarCampoEmail() == true) && (comprobarCampoPassword() == true) && (comprobarCampoRepPassword() == true)) {
            username.value = "";
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
            if (username.length != "") {
                var regexNombre = /^[A-Za-z0-9]+$/g;
                var esValido = regexNombre.test(username);
                if (!esValido) {
                    $("#p1").text("* El campo Nombre de Usuario no puede poseer caracteres especiales ni espacios en blanco")
                        .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                    $("#txtNombre").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p1").text("* El campo Nombre de Usuario no puede quedar vacío")
                    .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                $("#txtNombre").addClass('errorClass');
                return false;
            }
            $("#txtNombre").addClass('okClass');
            return true;
        }

        function comprobarCampoEmail() {
            if (email.length != "") {
                var regexEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
                var esValido = regexEmail.test(email);
                if (!esValido) {
                    $("#p2").text("* El campo Email no posee un email válido (***@***.com)")
                        .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                    $("#txtEmail").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p2").text("* El campo Email no puede quedar vacío")
                    .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                $("#txtEmail").addClass('errorClass');
                return false;
            }
            $("#txtEmail").addClass('okClass');
            return true;
        }

        function comprobarCampoPassword() {
            if (pass.length != "") {
                if (pass.length > 7) {
                    var regexAlfanumerico = /^[A-Za-z0-9]+$/;
                    var esValido = regexAlfanumerico.test(pass);
                    if (esValido) {
                        $("#p3").text("* El Password debe poseer al menos un caracter especial")
                            .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                        $("#txtPassword").addClass('errorClass');
                        return false;
                    }
                } else {
                    $("#p3").text("* El Password debe poseer un mínimo de 8 caracteres")
                        .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                    $("#txtPassword").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p3").text("* El campo Password no puede quedar vacío")
                    .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                $("#txtPassword").addClass('errorClass');
                return false;
            }
            $("#txtPassword").addClass('okClass');
            return true;
        }

        function comprobarCampoRepPassword() {
            if (repass.length != "") {
                if (repass != pass) {
                    $("#p4").text("* Las contraseñas no coinciden")
                        .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                    $("#txtRepPassword").addClass('errorClass');
                    return false;
                }
            } else {
                $("#p4").text("* El campo Repetir Password no puede quedar vacío")
                    .fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                $("#txtRepPassword").addClass('errorClass');
                return false;
            }
            $("#txtRepPassword").addClass('okClass');
            return true;
        }
    }
});
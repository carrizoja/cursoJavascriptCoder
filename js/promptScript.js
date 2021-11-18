// SIMULADOR DE COTIZACIÓN DE PRODUCTOS DE PASTELERÍA

let total = 0;
const DESCUENTO_NACION = 0.30;
const DESCUENTO_PERSONAL = 0.25;
let user;
let pass;
const totalLanacion = (total, DESCUENTO_NACION) => { return total - (total * DESCUENTO_NACION) };
const totalPersonal = (total, DESCUENTO_PERSONAL) => { return total - (total * DESCUENTO_PERSONAL) };

// clase constructora de producto

class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
    }
}

// clase constructora de usuario

class Usuario {
    constructor(nombre, password) {
        this.nombre = nombre;
        this.password = password;
    }
}

class Carrito {
    constructor(nombreProducto, precioUnitario, cantidad, precioPorCantidad) {
        this.nombreProducto = nombreProducto;
        this.precioUnitario = precioUnitario;
        this.cantidad = cantidad;
        this.precioPorCantidad = precioPorCantidad;
    }

}

// declaración de Array de Productos

const productos = [];
productos.push(new Producto("1", "Cookie", "130", "0"));
productos.push(new Producto("2", "Torta", "3700", "0"));
productos.push(new Producto("3", "Funbox", "750", "0"));

// Función que ordena los productos de precio menor a mayor

const productosOrdenPrecio = productos.sort((prod1, prod2) => {
    return prod1.precio - prod2.precio
})

// declaración de array de Usuarios

const usuarios = [];
const usuario = registrarUsuario();

//genero el carrito de compras
const carritoDeCompras = [];
usuarios.push(new Usuario(usuario.nombre, usuario.password));
localStorage.setItem("usuarios", JSON.stringify(usuarios));
/* registrarUsuario(); */
validarUsuario();
comprar();

// Función que permite crear un pequeño registro de usuario

function registrarUsuario() {
    let registroExitoso = false;
    alert("Bienvenido/a a Sweetdesign.com.ar - comencemos con el registro de usuario");
    do {
        let usuario = prompt("Elija un nombre de usuario (el campo no puede quedar vacío)");
        if ((usuario != "") && (usuario != null)) {
            const usuariosAlmacenados = JSON.parse(localStorage.getItem("usuarios"));
            if (usuariosAlmacenados == null) {
                user = usuario;
                let password = prompt("Elija una contraseña (el campo no puede quedar vacío)");
                if ((password == "") || (password == null)) alert("No ha ingresado una contraseña. Empecemos de nuevo");
                else {
                    alert("¡Registro Exitoso!");
                    registroExitoso = true;
                    pass = password;
                }
            } else {
                for (let i = 0; i < usuariosAlmacenados.length; i++) {
                    if (usuario == usuariosAlmacenados[i].nombre) {
                        alert("Ya existe este usuario. Por favor, elija otro nombre");
                    } else {
                        user = usuario;
                        let password = prompt("Elija una contraseña (el campo no puede quedar vacío)");
                        if ((password == "") || (password == null)) alert("No ha ingresado una contraseña. Empecemos de nuevo");
                        else {
                            alert("¡Registro Exitoso!");
                            registroExitoso = true;
                            pass = password;
                        }
                    }
                }
            }
        } else alert("No ha ingresado un nombre de usuario");
    } while (registroExitoso == false);
    const usuario1 = new Usuario();
    usuario1.nombre = user;
    usuario1.password = pass;

    return usuario1;
}

// Función que permite validar el usuario generado previamente

function validarUsuario() {
    let loginExitoso = false;
    do {
        let usuario = prompt("Ingrese su usuario");
        const usuariosAlmacenados = JSON.parse(localStorage.getItem("usuarios"));
        for (let i = 0; i < usuariosAlmacenados.length; i++) {
            if (usuario == usuariosAlmacenados[i].nombre) {
                const userEncontrado = new Usuario(usuarios[i].nombre, usuarios[i].password)
                let password = prompt("Ingrese su contraseña");
                if (password == userEncontrado.password) {
                    alert("Login exitoso.¡Bienvenido " + userEncontrado.nombre + "!");
                    loginExitoso = true;
                } else alert("Contraseña incorrecta");

            } else alert("Usuario no registrado");
        }

    } while (loginExitoso == false);

}

// Función que permite realizar la gestión de la compra del usuario

function comprar() {
    alert("Bienvenido al menú de compra de productos");
    let opcionCorrecta = false;
    do {
        let opcion = prompt("Elija opción: 1. Comprar - 2. Salir");
        if (opcion == "1") {
            let finCompra = false;
            while (finCompra == false) {
                let texto = "";
                for (let i = 0; i < productosOrdenPrecio.length; i++) {
                    texto += productosOrdenPrecio[i].nombre + " Precio: $ " + productosOrdenPrecio[i].precio + "\n"
                }
                alert("La lista de productos es : \n" + texto);
                let opcionCompra = prompt("Menú de compra: 1. Cookies - 2. Torta - 3. FunBox");
                let seguir;
                switch (opcionCompra) {
                    case '1':
                        let cantCookies = prompt("Elija la cantidad de Cookies (máximo 10). Precio por unidad: 130 pesos.");
                        // accedo a la cantidad del producto[0] (Cookies)
                        if (productos[0].cantidad = parseInt(cantCookies)) {
                            if ((productos[0].cantidad > 0) && (productos[0].cantidad < 11)) {
                                total += productos[0].cantidad * productos[0].precio;
                                alert("Ha cargado en el carrito la cantidad de " + productos[0].cantidad + " " + productos[0].nombre + " a " + productos[0].precio + " pesos cada una.");
                                carritoDeCompras.push(new Carrito(productos[0].nombre, productos[0].precio, productos[0].cantidad, (productos[0].precio * productos[0].cantidad)));
                                do {
                                    seguir = prompt("¿Desea seguir comprando? Presione 'S' por SI o 'N' por NO.").toLowerCase();
                                    if ((seguir == "n") || (seguir == "s")) {
                                        if (seguir == "n") {
                                            finCompra = true;
                                        }
                                    }
                                } while ((seguir != "n") && (seguir != "s"))
                            } else alert("La cantidad seleccionada no es válida");
                        } else alert("El ingreso no es válido.");
                        break;
                    case '2':
                        let cantTortas = prompt("Elija la cantidad de Tortas (máximo 3). Precio por unidad: 3700 pesos.");
                        //accedo a la cantidad del producto[1] (Tortas)
                        if (productos[2].cantidad = parseInt(cantTortas)) {
                            if ((productos[2].cantidad > 0) && (productos[2].cantidad < 4)) {
                                total += productos[2].cantidad * productos[2].precio;
                                alert("Ha cargado en el carrito la cantidad de " + productos[2].cantidad + " " + productos[2].nombre + " a " + productos[2].precio + " pesos cada una.");
                                carritoDeCompras.push(new Carrito(productos[2].nombre, productos[2].precio, productos[2].cantidad, (productos[2].precio * productos[2].cantidad)));
                                do {
                                    seguir = prompt("¿Desea seguir comprando? Presione 'S' por SI o 'N' por NO.").toLowerCase();
                                    if ((seguir == "n") || (seguir == "s")) {
                                        if (seguir == "n") {
                                            finCompra = true;
                                        }
                                    }
                                } while ((seguir != "n") && (seguir != "s"))
                            } else alert("La cantidad seleccionada no es válida");

                        } else alert("El ingreso no es válido.");
                        break;
                    case '3':
                        let cantFunBox = prompt("Elija la cantidad de FunBox (máximo 6). Precio por unidad: 750 pesos.");
                        // accedo a la cantidad del producto[2] (Funbox)
                        if (productos[1].cantidad = parseInt(cantFunBox)) {
                            if ((productos[1].cantidad > 0) && (productos[1].cantidad < 7)) {
                                total += productos[1].cantidad * productos[1].precio;
                                alert("Ha cargado en el carrito la cantidad de " + productos[1].cantidad + " " + productos[1].nombre + " a " + productos[1].precio + " pesos cada una.");
                                carritoDeCompras.push(new Carrito(productos[1].nombre, productos[1].precio, productos[1].cantidad, (productos[1].precio * productos[1].cantidad)));
                                do {
                                    seguir = prompt("¿Desea seguir comprando? Presione 'S' por SI o 'N' por NO.").toLowerCase();
                                    if ((seguir == "n") || (seguir == "s")) {
                                        if (seguir == "n") {
                                            finCompra = true;
                                        }
                                    }
                                } while ((seguir != "n") && (seguir != "s"))
                            } else alert("La cantidad seleccionada no es válida");
                        } else alert("El ingreso no es válido.");
                        break;
                    default:
                        alert("Opción inválida");
                        break;
                }
                opcionCorrecta = true;
            }
            let opcionDescuento

            do {
                opcionDescuento = prompt("¿Posee club La Nación (30% descuento) o club Personal (25% descuento)? 'L' (La Nación) - 'P' (Personal) - 'N' (NO)").toLowerCase();
                switch (opcionDescuento) {

                    case 'n':

                        break;
                    case 'l':
                        total = totalLanacion(total, DESCUENTO_NACION);
                        break;
                    case 'p':
                        total = totalPersonal(total, DESCUENTO_PERSONAL);
                        break;
                    default:
                        alert("opción no reconocida");
                }
            } while ((opcionDescuento != "n") && (opcionDescuento != "p") && (opcionDescuento != "l"))

        } else if (opcion == "2") {
            opcionCorrecta = true;
        } else { alert("Opción no válida. Vuelva a elegir") }

    } while (opcionCorrecta == false)

    //tabla usando DOM
    let tabla = document.createElement("table");
    tabla.setAttribute("class", "table table-striped");
    let tablaBody = document.createElement("tbody");
    let encabezado = document.createElement("tr");
    //Genero el encabezado de la tabla
    encabezado.innerHTML = `<td><b>Nombre de producto</b></td>
    <td><b>Precio Unitario</b></td>
    <td><b>Cantidad</b></td>
    <td><b> Precio por Cantidad </b></td>`;
    tablaBody.appendChild(encabezado);
    for (const producto of carritoDeCompras) {
        //crear las filas con sus celdas
        let fila = document.createElement("tr");
        //plantillas literales
        fila.innerHTML = `<td> ${producto.nombreProducto}</td>
    <td>${producto.precioUnitario}</td>
    <td>${producto.cantidad}</td>
    <td><b>$ ${producto.precioPorCantidad}</b></td>`;
        tablaBody.appendChild(fila);
    }
    tabla.appendChild(tablaBody);
    document.getElementById("inferior").appendChild(tabla);
    let div = document.createElement('div');
    div.id = 'content';
    div.innerHTML = `<h2> El total a pagar es $ ${total} .- ¡Muchas gracias por elegirnos! </h2>`;
    tablaBody.appendChild(div);

}

// Función que busca las tortas

function buscarTortas() {

    const cardContenedor = document.getElementById('card-lists');
    const cards = cardContenedor.getElementsByClassName('featured__item')
    for (let i = 0; i < cards.length; i++) {
        let nombreCard = cards[i].querySelector(".featured__item__text h6.tituloCard");

        if (nombreCard.innerText.indexOf("Torta") !== -1) {
            cards[i].style.display = "";

        } else {
            cards[i].style.display = "none";
        }
    }
}

function buscarCookies() {

    const cardContenedor = document.getElementById('card-lists');
    const cards = cardContenedor.getElementsByClassName('featured__item')
    for (let i = 0; i < cards.length; i++) {
        let nombreCard = cards[i].querySelector(".featured__item__text h6.tituloCard");

        if (nombreCard.innerText.indexOf("Cookie") !== -1) {
            cards[i].style.display = "";

        } else {
            cards[i].style.display = "none";
        }
    }
}

function buscarFunBox() {

    const cardContenedor = document.getElementById('card-lists');
    const cards = cardContenedor.getElementsByClassName('featured__item')
    for (let i = 0; i < cards.length; i++) {
        let nombreCard = cards[i].querySelector(".featured__item__text h6.tituloCard");

        if (nombreCard.innerText.indexOf("Fun Box") !== -1) {
            cards[i].style.display = "";

        } else {
            cards[i].style.display = "none";
        }
    }


}

function buscarTodos() {

    const cardContenedor = document.getElementById('card-lists');
    const cards = cardContenedor.getElementsByClassName('featured__item')
    for (let i = 0; i < cards.length; i++) {
        let nombreCard = cards[i].querySelector(".featured__item__text h6.tituloCard");

        if (nombreCard.innerText.indexOf(" ") !== -1) {
            cards[i].style.display = "";

        } else {
            cards[i].style.display = "none";
        }
    }


}


// JS para carrito de compras

let productosEnCarrito = JSON.parse(localStorage.getItem('carritoCompras'));
if (!productosEnCarrito) {
    productosEnCarrito = [];
}
const elementoPadre = document.querySelector('#buyItems');
const sumaPrecioCarrito = document.querySelector('#sum-prices');
const productos = document.querySelectorAll('.product-under');


const contadorSumaPrecio = function() { // 4
    let sum = 0;
    productosEnCarrito.forEach(item => {
        sum += item.price;
    });
    return sum;
}

const actualizarCarritoHTML = function() { // 3
    localStorage.setItem('carritoCompras', JSON.stringify(productosEnCarrito));
    if (productosEnCarrito.length > 0) {
        let result = productosEnCarrito.map(product => {
            return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>$${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`
        });
        elementoPadre.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('hidden');
        sumaPrecioCarrito.innerHTML = '$' + contadorSumaPrecio();

    } else {
        document.querySelector('.checkout').classList.add('hidden');
        elementoPadre.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
        sumaPrecioCarrito.innerHTML = '';
    }
}

function updateproductosEnCarrito(product) { // 2
    for (let i = 0; i < productosEnCarrito.length; i++) {
        if (productosEnCarrito[i].id == product.id) {
            productosEnCarrito[i].count += 1;
            productosEnCarrito[i].price = productosEnCarrito[i].basePrice * productosEnCarrito[i].count;
            return;
        }
    }
    productosEnCarrito.push(product);
}

productos.forEach(item => { // 1
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('addToCart')) {
            const productID = e.target.dataset.productId;
            const productName = item.querySelector('.productName').innerHTML;
            const productPrice = item.querySelector('.priceValue').innerHTML;
            const productImage = item.querySelector('img').src;
            let product = {
                name: productName,
                image: productImage,
                id: productID,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice,
            }
            updateproductosEnCarrito(product);
            actualizarCarritoHTML();
        }
    });
});

elementoPadre.addEventListener('click', (e) => { // Last
    const isPlusButton = e.target.classList.contains('button-plus');
    const isMinusButton = e.target.classList.contains('button-minus');
    if (isPlusButton || isMinusButton) {
        for (let i = 0; i < productosEnCarrito.length; i++) {
            if (productosEnCarrito[i].id == e.target.dataset.id) {
                if (isPlusButton) {
                    productosEnCarrito[i].count += 1
                } else if (isMinusButton) {
                    productosEnCarrito[i].count -= 1
                }
                productosEnCarrito[i].price = productosEnCarrito[i].basePrice * productosEnCarrito[i].count;

            }
            if (productosEnCarrito[i].count <= 0) {
                productosEnCarrito.splice(i, 1);
            }
        }
        actualizarCarritoHTML();
    }
});

actualizarCarritoHTML();

// Js para carrito 2

const responsiveNavbar = (function() {
    const button = document.querySelector("#menuButton");
    const navbar = document.querySelector("#navbar")
    button.addEventListener("click", function() {
        if (navbar.className === "navbar") {
            navbar.className += " navbarResponsive";
        } else {
            navbar.className = "navbar";
        }
    });
})();

if (document.getElementById('hearderSlide')) {
    $('#hearderSlide').multislider();
    $('#hearderSlide').multislider('pause');
}


function closeCart() {
    const cart = document.querySelector('.producstOnCart');
    cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
    const cart = document.querySelector('.producstOnCart');
    cart.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling');
});


const closeShopCart = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);
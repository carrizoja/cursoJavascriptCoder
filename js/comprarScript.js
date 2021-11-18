// Inicio Renderización de productos

// array de productos

let products = [{ image: "../assets/img/torta_arcoIris.png", name: "Torta Arco Iris", price: 3700, "id": 1 },
    { image: "../assets/img/pikachu.png", name: "Torta Pikachu", price: 4100, "id": 2 },
    { image: "../assets/img/cookieStich.png", name: "Cookie Stich", price: 150, "id": 3 },
    { image: "../assets/img/cookieDino.png", name: "Cookie Dino", price: 130, "id": 4 },
    { image: "../assets/img/tortaRosa.png", name: "Torta Rosa", price: 4000, "id": 5 },
    { image: "../assets/img/funBox.png", name: "Fun Box", price: 1500, "id": 6 },
    { image: "../assets/img/olafCookie.png", name: "Docena Cookie Olaf", price: 2000, "id": 7 },
    { image: "../assets/img/Torta_Chimuelo.png", name: "Torta Chimuelo", price: 3700, "id": 8 },
    { image: "../assets/img/hulk.png", name: "Torta Hulk", price: 4500, "id": 9 },
    { image: "../assets/img/cookieMundo.png", name: "Cookie Mundo", price: 130, "id": 10 },
    { image: "../assets/img/TortaBautismo.png", name: "Torta Bautismo", price: 3700, "id": 11 },
    { image: "../assets/img/cookieCamion.png", name: " Docena Cookies Camión", price: 1600, "id": 12 },
    { image: "../assets/img/cookiesDocena.png", name: "Docena Cookies Navideñas", price: 1560, "id": 13 },
    { image: "../assets/img/CookiesHelado.png", name: "Cookie Helado", price: 130, "id": 14 }
]

const renderizar = () => {

    let html = ""

    products.forEach((producto, index) => {

        html += ` <div class="col-lg-3 col-md-4 col-sm-6 product featured__item">
                <div class=" product-under">
                    <div class="featured__item__pic set-bg product-image tortaArcoIris">
                        <img src="${producto.image}" />
                        <ul class="featured__item__pic__hover product-over">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a href="#/"><i class="fa fa-shopping-cart addToCart" data-product-id=${index} onclick="myFunction()"></i></a></li>
                        </ul>
                    </div>
                    <div class="featured__item__text product-summary">
                        <h6 class="tituloCard productName"><a href="#">${producto.name}</a></h6>
                        <h5>$<span class="priceValue">${producto.price}</span>.-</h5>
                    </div>
                </div>
            </div>`

    });

    document.getElementById("listaProductos").innerHTML = html

}

renderizar()

//Inicio Funciones para filtrar los productos

function buscarTortas() {

    const cardContenedor = document.getElementById('card-lists');
    const cards = cardContenedor.getElementsByClassName('featured__item');
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

    const productos = $(".featured__item");
    const cards = productos;
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
    const cards = cardContenedor.getElementsByClassName('featured__item');

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
    const cards = cardContenedor.getElementsByClassName('featured__item');

    for (let i = 0; i < cards.length; i++) {
        let nombreCard = cards[i].querySelector(".featured__item__text h6.tituloCard");

        if (nombreCard.innerText.indexOf(" ") !== -1) {
            cards[i].style.display = "";

        } else {
            cards[i].style.display = "none";
        }
    }


}

function buscarProducto() {
    const input = document.getElementById("barraBusqueda").value.toUpperCase();
    console.log(input);
    const contenedorProductos = document.getElementById('listaProductos');
    const productos = contenedorProductos.getElementsByClassName("featured__item");
    for (let i = 0; i < productos.length; i++) {
        let nombreCard = productos[i].querySelector(".featured__item__text h6.tituloCard");
        if (nombreCard.innerText.toUpperCase().indexOf(input) > -1) {
            productos[i].style.display = "";
        } else {
            productos[i].style.display = "none";
        }
    }

}
// Fin Funciones para filtrar por Productos

// Inicio JS para carrito de compras 

let productosEnCarrito = JSON.parse(localStorage.getItem('carritoCompras'));
if (!productosEnCarrito) {
    productosEnCarrito = [];
}
const elementoPadre = document.querySelector('#comprarItems');
const sumaPrecioCarrito = document.querySelector('#sum-prices');
const productos = document.querySelectorAll('.product-under');


const contadorSumaPrecio = function() { // 4
    let suma = 0;
    productosEnCarrito.forEach(item => {
        suma += item.precio;
    });
    return suma;
}

// Función que imprime los productos en el HTML del Carrito

const actualizarCarritoHTML = function() { // 3
    localStorage.setItem('carritoCompras', JSON.stringify(productosEnCarrito));
    if (productosEnCarrito.length > 0) {
        let result = productosEnCarrito.map(producto => {
            return `
            <li class="buyItem">
                <img src="${producto.imagen}">
                <div>
                    <h5>${producto.nombre}</h5>
                    <h6>$${producto.precio}</h6>
                    <div>
                        <button class="button-minus" data-id=${producto.id}>-</button>
                        <span class="countOfProduct">${producto.contador}</span>
                        <button class="button-plus" data-id=${producto.id}>+</button>
                    </div>
                </div>
            </li>`
        });
        elementoPadre.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('hidden');
        sumaPrecioCarrito.innerHTML = '$' + contadorSumaPrecio();

    } else {
        document.querySelector('.checkout').classList.add('hidden');
        elementoPadre.innerHTML = `<center><h2 class="empty" style="font-family: SUNN-line-regular;
    src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> Tu Carrito está vacío </h2></center>`;
        sumaPrecioCarrito.innerHTML = '';
    }
}

// Función que actualiza el estado de los productos en el Carrito

function actualizarProductosEnCarrito(producto) { // 2
    for (let i = 0; i < productosEnCarrito.length; i++) {
        if (productosEnCarrito[i].id == producto.id) {
            productosEnCarrito[i].contador += 1;
            productosEnCarrito[i].precio = productosEnCarrito[i].precioBase * productosEnCarrito[i].contador;
            return;
        }
    }

    productosEnCarrito.push(producto);
}

// Evento que agrega el producto seleccionado al Carrito
productos.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.classList.contains('addToCart')) {
            const productoID = e.target.dataset.productId;
            const productoNombre = item.querySelector('.productName').innerHTML;
            const productoPrecio = item.querySelector('.priceValue').innerHTML;
            const productoImagen = item.querySelector('img').src;
            let producto = {
                nombre: productoNombre,
                imagen: productoImagen,
                id: productoID,
                contador: 1,
                precio: +productoPrecio,
                precioBase: +productoPrecio,
            }
            actualizarProductosEnCarrito(producto);
            actualizarCarritoHTML();
        }
    });

});


// Evento para controlar cuando se presiona el Adicionar o Disminuir cantidad de producto dentro del carrito

elementoPadre.addEventListener('click', (e) => { // Last
    const esBotonSuma = e.target.classList.contains('button-plus');
    const esBotonResta = e.target.classList.contains('button-minus');
    if (esBotonSuma || esBotonResta) {
        for (let i = 0; i < productosEnCarrito.length; i++) {
            if (productosEnCarrito[i].id == e.target.dataset.id) {
                if (esBotonSuma) {
                    productosEnCarrito[i].contador += 1
                } else if (esBotonResta) {
                    productosEnCarrito[i].contador -= 1
                }
                productosEnCarrito[i].precio = productosEnCarrito[i].precioBase * productosEnCarrito[i].contador;

            }
            if (productosEnCarrito[i].contador <= 0) {
                productosEnCarrito.splice(i, 1);
            }
        }
        actualizarCarritoHTML();
    }
});

actualizarCarritoHTML();

// Función que cierra el HTML del carrito

function cerrarCarrito() {
    const carrito = document.querySelector('.producstOnCart');
    carrito.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling')
}


const abrirCarritoCompras = document.querySelector('.botonCarritoCompras');
abrirCarritoCompras.addEventListener('click', () => {
    const carrito = document.querySelector('.producstOnCart');
    carrito.classList.toggle('hide');
    document.querySelector('body').classList.toggle('stopScrolling');
});


const cerrarCarritoCompras = document.querySelector('#closeButton');
const overlay = document.querySelector('.overlay');
cerrarCarritoCompras.addEventListener('click', cerrarCarrito);
overlay.addEventListener('click', cerrarCarrito);

function confirmarCompra() {
    let login = document.getElementById("result").innerText;
    console.log(login);
    if (login != "") {
        cerrarCarrito();
        Swal.fire({
            title: '¿Desea confirmar la compra?',
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('¡Comprado!', '', 'success')
                productosEnCarrito = [];
                actualizarCarritoHTML();
            } else if (result.isDenied) {
                Swal.fire('Compra cancelada', '', 'info')
            }
        })

    } else {

        cerrarCarrito();
        Swal.fire({

            icon: 'error',
            title: 'No te has registrado aún.',
            text: '¡Algo va mal!',
            footer: '<a href="">¿Por qué ocurre ésto?</a>'
        })




    }


}

// Fin JS para carrito de compras

// Función para el snackbar

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}

// traigo localStorage de login.html

document.getElementById("result").innerHTML = localStorage.getItem("pasajeValor");

// limpiar cache al cerrar html

localStorage.clear();
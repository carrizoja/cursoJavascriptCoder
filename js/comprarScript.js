// Función que busca las tortas

function buscarTortas() {

    const cardContenedor = document.getElementById('card-lists');
    const cards = cardContenedor.getElementsByClassName('featured__item')
    debugger
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
    debugger
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
    debugger
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
    debugger
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

let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if (!productsInCart) {
    productsInCart = [];
}
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.product-under');


const countTheSumPrice = function() { // 4
    let sum = 0;
    productsInCart.forEach(item => {
        sum += item.price;
    });
    return sum;
}

const updateShoppingCartHTML = function() { // 3
    localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {
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
        parentElement.innerHTML = result.join('');
        document.querySelector('.checkout').classList.remove('hidden');
        cartSumPrice.innerHTML = '$' + countTheSumPrice();

    } else {
        document.querySelector('.checkout').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
        cartSumPrice.innerHTML = '';
    }
}

function updateProductsInCart(product) { // 2
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}

products.forEach(item => { // 1
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
            updateProductsInCart(product);
            updateShoppingCartHTML();
        }
    });
});

parentElement.addEventListener('click', (e) => { // Last
    const isPlusButton = e.target.classList.contains('button-plus');
    const isMinusButton = e.target.classList.contains('button-minus');
    if (isPlusButton || isMinusButton) {
        for (let i = 0; i < productsInCart.length; i++) {
            if (productsInCart[i].id == e.target.dataset.id) {
                if (isPlusButton) {
                    productsInCart[i].count += 1
                } else if (isMinusButton) {
                    productsInCart[i].count -= 1
                }
                productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;

            }
            if (productsInCart[i].count <= 0) {
                productsInCart.splice(i, 1);
            }
        }
        updateShoppingCartHTML();
    }
});

updateShoppingCartHTML();

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
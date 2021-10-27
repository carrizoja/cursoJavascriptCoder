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
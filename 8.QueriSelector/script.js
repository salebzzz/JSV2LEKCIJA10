/**
 *  - querySelector -> "#name", ".name", -> Vraca 1 element
 *  - querySelectorAll -> "#name", ".name" -> Vraca arraz sa elementima
 *  querySelector(".nekaKlasa") -> 1 element
 *  querySelectorAll(".nekaKlasa") -> sve elemente
 *
 *
 *  getElementById -> Selektujete samo sa ID-em
 *  getElementByClassName -> Selektujete samo sa klassom
 */

document.querySelector("#title").style.color = "red";


document.querySelector(".subtitle").style.color = "green";
document.getElementsByClassName("subtitle2")[0].style.color = "blue";

/**
 *Pomocu qureySelectorAll selektovati i obojiti sve paragrafe koji imaju klasu "produkt"
 */

let products = document.querySelectorAll(".product")

for(let product of products) {
    product.style.color = "#493c41";
}

/**
 * Promeniti da postojeca petlja menja boju u tamno sivy
 *  -> ako je cena proizvoda 5000 ili vise, obojiti cenu ucrveno
 *  -> ako je manje obojiti cenu u zeleno
 */

let productPrices = document.querySelectorAll(".productPrice");

for(let price of productPrices) {
    // Ova varijabla neka mi sluzi samo za proveru ukoliko sve radi kako treba mogu je izbrisati <- mini optimizacija
    let productPrice = price.textContent;

    if (productPrices >= 5000) {
        price.style.color = "red";
    }
    else {
        price.style.color = "green"
    }
}
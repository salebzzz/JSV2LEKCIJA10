
//getElementById

/**
 * document? -> HTML fajl unutar koga se ucitava script.js
 * document = index.html
 *
 * document.getElementById
 *      -> vraca element na osnovu ID-a
 *      ->iz index.html izvuci mi element koji sadrzi ID "name"
 *
 *      style
 *
 *        <p style="color: red"> </p>
 */
let name = prompt("Unesite vase ime");
let textColor = prompt("Unesite zeljenu boju texta")
let backgroundColor = prompt("Unesite zeljenu boju pazadine");

let marqueeElement =document.getElementById("name");

 marqueeElement.style.color=textColor;
 marqueeElement.style.backgroundColor =backgroundColor;
 marqueeElement.innerText = name;

 /**
  * - getElementById -> prosledite ID, dobijete element
  * - getElementByClassName -> Prosledite klasu
  * - querySelector -> "#name", ".name" -> vraca jedan element
  * - querySelectorAll -> "#name", ".name" -> vraca aray sa elementima
  *
  */
let products = ["hleb", "mleko", "jogurt"];
// ovo je for petlja
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}
// ovo je for in petlja
for (let i in products) {
    console.log(products[i]);
}
let korpa = [
    {
        name: "Hleb",
        price: 99,
        amount: 1
    },
    {
        name: "Luk",
        price: 150,
        amount: 3
    },
    {
        name: "Jogurt",
        price: 250,
        amount: 1
    }

];

/**
 * Kako da ispisem koliko kosta prvi proizvod (hleb)
 * -> Gde su mi podaci?  korpa
 * -> Kako da izvucem prvi podatak iz niza? korpa[0]
 *    -> Sta sam ja dobio iz korpa[0]? Koju vrstu podataka?
 *       ->  objekat
 *           -> sta taj objekat sadrzi ? {name: 'hleb , price: 99 , amount: 1 }
 *               -> Sta meni treba iz tog objekta? price
 */

console.log(korpa[0]['price']);

// Pomocu petlje, ispisati cene svih proizvoda --- 99, 150, 250

/*
 *Koju petlju koristiti? forIn
 *  -> 1. Kako da napisem petlju? I koju? ---- forIn
 *  -> 2. Kako uopste da ispisem svaki proizvod? --- korpa(proizvod)
 *  -> 3. Kako da ispisem samo cenu za odredjeni proizvod? korpa[proizvod]['price']
 */

for (let proizvod in korpa) {

    // Ako je cena proizvoda veca od 200, zaustavi petlju
    /**
     * Kako proveriti cenu proizvoda? - da li je veca od 200
     * kako prekinuti petlju?
     */

    /**
     * Kko uprostiti ceo kod ---> (korpa[proizvod]['price'] <---
     * u variabli ubacimo i damo neki naziv variabli
     * NPR: let productPrice = korpa[proizvod]['cena']
     */

    let productPrice = korpa[proizvod]['price']

    if (korpa[proizvod]['price'] > 200) {
        break;
    }

    console.log("Proizvod  kosta vise od 200!")
}
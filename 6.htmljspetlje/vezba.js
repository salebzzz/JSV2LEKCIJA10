
  alert ("Dobrodosao na sajt!");

 let name = prompt("Upisite vase ime").toLowerCase();


 let names = ["admin", "administrator", "toma"];

  /**
   *Kako da proverimo da li NAME postoji unutar NAMES"?
   */
   if(names.includes(name)) {
       alert("Dobrodosao administratore");
   } else {
       alert("Nemate pristup sajtu");
   }
  /**
   *Da li je ime koje je korisnik uneo u arrayu names
   * -> Toma -> Da li se to ime nalazi u array names?
   *     -> Ako se nalazi ispisati preko alerta "Dobrodosao administratore"
   *     -> Ako se NE nalazi onda ispisati "Nemate pristuo sajtu"
   */

let cities = [
    "Svi",
    "Beograd",
    "Subotica",
    "Sarajevo",
    "Podgorica",
    "Zagreb",
    "Nis",
    "Split",
    "Rijeka",
    "Osijek",
    "Banja Luka",
    "Mostar",
    "Tuzla",
    "Zenica",
    "Skoplje",
    "Bitola",
    "Ohrid",
    "Tirana",
    "Drač",
    "Priština",
    "Peć",
    "Novi Sad",
    "Kragujevac",
    "Kraljevo",
    "Šibenik",
    "Dubrovnik",
    "Zadar"
];
let types = [
    "Stanovi",
    "Kuće",
    "Poslovni prostori",
    "Placevi",
    "Garaže/parking"
];


let options = [
        "Garsonjera",
        "Jednosoban stan",
        "Jednoiposoban stan",
        "Dvosoban stan",
        "Dvoiposoban stan",
        "Trosoban stan",
        "Troiposoban stan",
        "Četvorosoban",
        "4.5 i više soba"

];


let realEstates = [
    {
        city:"Beograd",
        option: "Garsonjera",
        type: "Stanovi",
        price: 49300,
        size: 25
    },
    {
        city:"Novi Sad",
        option: "null",
        type: "kuce",
        price: 13000,
        size: 85
    },

    {
        city:"Subotica",
        option: "Jednosoban stan",
        type: "Stanovi",
        price: 32000,
        size: 40
    },
    {
        city:"Zagreb",
        option: "Dvosoban stan",
        type: "Stanovi",
        price: 78000,
        size: 65
    },
    {
        city:"Podgorica",
        option: "Trosoban stan",
        type: "Stanovi",
        price: 95000,
        size: 90
    },
    {
        city:"Sarajevo",
        option: "Jednoiposoban stan",
        type: "Stanovi",
        price: 55000,
        size: 55
    },
    {
        city:"Split",
        option: "Kuća",
        type: "Kuće",
        price: 120000,
        size: 140
    },
    {
        city:"Rijeka",
        option: "Četvorosoban",
        type: "Stanovi",
        price: 135000,
        size: 110
    },
    {
        city:"Tuzla",
        option: "Placevi",
        type: "Placevi",
        price: 45000,
        size: 500
    },
    {
        city:"Skoplje",
        option: "Troiposoban stan",
        type: "Stanovi",
        price: 87000,
        size: 95
    },
    {
        city:"Ohrid",
        option: "Garaže",
        type: "Garaže/parking",
        price: 10000,
        size: 20
    },
    {
        city:"Priština",
        option: "Poslovni prostor",
        type: "Poslovni prostori",
        price: 65000,
        size: 75
    }

];





 let citiesSelector = document.querySelector("#citiesSelector");
 let typesSelector = document.querySelector("#typeSelector");
 let roomSelector = document.querySelector("#roomSelector");
 console.log(citiesSelector);


for(let option of options) {
    let optionElement = document.createElement("option");
    optionElement.innerHTML = option;
    roomSelector.appendChild(optionElement);

}



for(let type of types) {
    let typeOption = document.createElement("option");
    typeOption.innerHTML = type;

    typesSelector.appendChild(typeOption);

}

 for(let city of cities) {
     let cityOption = document.createElement("option");
     cityOption.innerHTML = city;


     citiesSelector.appendChild(cityOption);

     // Ako postoji grad za koji nemamo nekretninu dodati atribut disabled

     let cityFound = false;

     for(let estate of realEstates) {
         if(estate.city === city) {
             cityFound = true;
             break;
         }
     }


     if(!cityFound && city !== "Svi"){
         cityOption.setAttribute("disabled", "true");
     }
 }

 let currentCity = null;
 let currentRoom = null;
 let currentType = null;

 roomSelector.addEventListener("change",function(event){
    currentRoom = event.currentTarget.value;
});

typesSelector.addEventListener("change", function(event){
    currentType = event.currentTarget.value;
});


citiesSelector.addEventListener("change",function(event){
    currentCity = event.currentTarget.value;

  let allEstates = document.getElementsByClassName("realEstate");


    for(let realEstate of allEstates) {
     //console.log(realEstate.querySelector(".city"));

     let estateCity = realEstate.querySelector(".city").textContent;

     realEstate.classList.remove("hidden");

     if(estateCity !== currentCity && currentCity !== "Svi") {
         realEstate.classList.add("hidden");

         }
     }

});




 for(let estate of realEstates) {

     let estateHolder = document.createElement("div");
     estateHolder.classList.add("realEstate");

     let estateTitle = document.createElement("p");
     estateTitle.innerText = estate.city;
     estateTitle.classList.add("city");

     let estateOption = document.createElement("p");
     if(estate.option == null) {
         estateOption.innerText = "-";
     } else {
         estateOption.innerText = estate.option;
     }

     let estatePrice = document.createElement("p");
     estatePrice = estate.price;

     let estateSize = document.createElement("P")
     estateSize = estate.size;

     estateHolder.append(estateTitle);
     estateHolder.append(estateOption);
     estateHolder.append(estatePrice);
     estateHolder.append(estateSize);

     document.querySelector("#estates").appendChild(estateHolder);

 }
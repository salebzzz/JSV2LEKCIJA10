let cars = [
    "Toyota",
    "Honda",
    "Ford",
    "Volkswagen",
    "BMW",
    "Audi",
    "Mercedes-Benz",
    "Tesla",
    "Hyundai",
    "Kia",
    "Nissan",
    "Chevrolet",
    "Subaru",
    "Mazda",
    "Peugeot",
    "Renault",
    "Škoda",
    "SEAT",
    "Volvo",
    "Alfa Romeo",
    "Jaguar",
    "Lexus",
    "Infiniti",
    "Acura",
    "Citroën",
    "Opel",
    "Fiat",
    "MINI",
    "Jeep",
    "Dodge",
    "Chrysler",
    "Cadillac",
    "Buick",
    "Mitsubishi",
    "Suzuki",
    "Land Rover",
    "Porsche",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Bentley",
    "Rolls-Royce",
    "Bugatti",
    "Aston Martin",
    "McLaren",
    "Genesis",
    "Dacia",
    "RAM",
    "GMC",
    "Lincoln"
];


for(let i = 0; i < cars.length; i++)
 {
     let firstLetter = cars[i][0].toLowerCase();

     if(firstLetter === "a") {
         continue;

     }
     console.log(cars[i]) ;
 }

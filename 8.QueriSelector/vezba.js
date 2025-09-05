/**
 * Napraviti array sa objektima sa 8 automobila:
 * {
 *     name: "Audi A4",
 *     price: 10511,
 *     image: "url do slike"
 * }
 */
let cars = [
    {
        name: "Audi A4",
        price: 10511,
        production_year: 2017,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    },
    {
        name: "BMW 3 Series",
        price: 12000,
        production_year: 2019,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    },
    {
        name: "Mercedes C-Class",
        price: 13000,
        production_year: 2018,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    },
    {
        name: "Volkswagen Golf",
        price: 9000,
        production_year: 2019,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    },
    {
        name: "Toyota Corolla",
        price: 9500,
        production_year: 2019,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    },
    {
        name: "Ford Focus",
        price: 8700,
        production_year: 2018,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    },
    {
        name: "Honda Civic",
        price: 9800,
        production_year: 2020,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    },
    {
        name: "Škoda Octavia",
        price: 23300,
        production_year: 2025,
        image: "https://zffautomotive.ie/wp-content/uploads/2024/08/1-3.jpeg"
    }
];




for (let car of cars) {

    let div = document.createElement("div");
    let image = document.createElement("img");
    image.src = car.image;

    let paragraph = document.createElement("p");
    paragraph.textContent = car.name;

    let span = document.createElement("span");
    span.textContent = car.price;

    paragraph.appendChild(span); //  appenChild Dodaje jos 1 HTML na kraju paragrafa to je uloga appendChild-a

    div.appendChild(image);
    div.appendChild(paragraph);

    if(car.production_year === 2025) {
        let productionYearSpan = document.createElement("span");
        productionYearSpan.textContent = "NOVO!";
        productionYearSpan.classList = "productionYear"; // Ukoliko zelimo da dodamo klasu dodamo += .... u ovom slucaju smo postavili da element ima neku klasu i to je znaci -> classList =

        div.appendChild(productionYearSpan);
    }


    document.querySelector("#main").appendChild(div);



}
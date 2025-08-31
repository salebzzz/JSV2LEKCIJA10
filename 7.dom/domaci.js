let ads = [
    {
        title: "Skoda octavia 2014",
        price: 9950,
        image: "https://cdn.skoda-storyboard.com/2024/02/03_Skoda_Octavia_Combi_51d65db5.jpg",
    },
    {
        title: "Audi A4",
        price: 8000,
        image: "https://www.akkompresor.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/WAUZZZF40KA081183_1200_900px.jpeg",
    }
];

let productsElement = document.getElementById("products");

for(let ad in ads) {
    productsElement.innerHTML += ads[ad]['title']+" "+ads[ad]['price']+" "+ads[ad]['image']+"<br/>";
}
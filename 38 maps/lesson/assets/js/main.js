
let map;

const PLACES = [
    {
        lat: 51.505,
        lng: -0.09,
        pic: "../img/..",
        title: "Title text",
        descrip: "discription",
        type: "red"

    }
]

map_link.addEventListener("click", function(){
    
    // let link = document.createElement("link");
    // link.setAttribute("rel", "stylesheet");
    // link.setAttribute("href", "assets/css/style.min.css");
    // document.head.append(link); 

    map = L.map('map').setView([51.505, -0.09], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
    .bindPopup(`<div class="wrap">
        <img class="imggg" src="assets/css/bike 8.jpg" alt="bike">
        <ul>
            <li>пн- пт: 8:00 - 18:00</li>
            <li>сб: 8:00 - 15:00</li>
        </ul>
        </div>
    `)
    .openPopup();
    map_link.remove();
    map_pic.remove();
})
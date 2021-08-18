
let map;

// const PLACES = [
//     {
//         lat: 51.505,
//         lng: -0.09,
//         pic: "../img/..",
//         title: "Title text",
//         descrip: "discription",
//         type: "red"

//     }
// ]

let blackIcon = L.icon({
    iconUrl: "assets/img/blackMarker.png",

    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
    popupAnchor:  [-19, -30] // point from which the popup should open relative to the iconAnchor
});

map = L.map('map').setView([50.44908475480658, 30.51337760642565], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([50.44908475480658, 30.51337760642565], {icon: blackIcon}).addTo(map)
.bindPopup(`<div class="wrap">
    <img class="imgg" src="assets/img/zv.jpg" alt="zv">
    <p><b>Золоті ворота</b></p>
    </div>
`)
L.marker([50.445108845090466, 30.50855902767757]).addTo(map)
.bindPopup(`<div class="wrap">
    <img class="imgg" src="assets/img/vs.jpg" alt="vs">
    <p><b>Владимирский собор</b></p>
    </div>
`)
L.marker([50.453336745069514, 30.514242949279513]).addTo(map)
.bindPopup(`<div class="wrap">
    <img class="imgg" src="assets/img/sk.jpg" alt="sk">
    <p><b>Собор Софія Київська</b></p>
    </div>
`)
L.marker([50.45075405063267, 30.52365465656732]).addTo(map)
.bindPopup(`<div class="wrap">
    <img class="imgg" src="assets/img/mn.jpg" alt="mn">
    <p><b>Майдан Незалежности</b></p>
    </div>
`)
L.marker([50.43737221628404, 30.522433535890737]).addTo(map)
.bindPopup(`<div class="wrap">
    <img class="imgg" src="assets/img/ds.jpg" alt="ds">
    <p><b>Дворец спорта</b></p>
    </div>
`)
L.marker([50.44891064140509, 30.537492539732874]).addTo(map)
.bindPopup(`<div class="wrap">
    <img class="imgg" src="assets/img/md.jpg" alt="md">
    <p><b>Мариинский дворец</b></p>
    </div>
`)
let lc = L.control.locate({
    position: 'topright',
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);



"use strict";

var map; // const PLACES = [
//     {
//         lat: 51.505,
//         lng: -0.09,
//         pic: "../img/..",
//         title: "Title text",
//         descrip: "discription",
//         type: "red"
//     }
// ]

var blackIcon = L.icon({
  iconUrl: "assets/img/blackMarker.png",
  iconSize: [38, 38],
  // size of the icon
  iconAnchor: [19, 38],
  // point of the icon which will correspond to marker's location
  popupAnchor: [-19, -30] // point from which the popup should open relative to the iconAnchor

});
map = L.map('map').setView([50.44908475480658, 30.51337760642565], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([50.44908475480658, 30.51337760642565], {
  icon: blackIcon
}).addTo(map).bindPopup("<div class=\"wrap\">\n    <img class=\"imgg\" src=\"assets/img/zv.jpg\" alt=\"zv\">\n    <p><b>\u0417\u043E\u043B\u043E\u0442\u0456 \u0432\u043E\u0440\u043E\u0442\u0430</b></p>\n    </div>\n");
L.marker([50.445108845090466, 30.50855902767757]).addTo(map).bindPopup("<div class=\"wrap\">\n    <img class=\"imgg\" src=\"assets/img/vs.jpg\" alt=\"vs\">\n    <p><b>\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440\u0441\u043A\u0438\u0439 \u0441\u043E\u0431\u043E\u0440</b></p>\n    </div>\n");
L.marker([50.453336745069514, 30.514242949279513]).addTo(map).bindPopup("<div class=\"wrap\">\n    <img class=\"imgg\" src=\"assets/img/sk.jpg\" alt=\"sk\">\n    <p><b>\u0421\u043E\u0431\u043E\u0440 \u0421\u043E\u0444\u0456\u044F \u041A\u0438\u0457\u0432\u0441\u044C\u043A\u0430</b></p>\n    </div>\n");
L.marker([50.45075405063267, 30.52365465656732]).addTo(map).bindPopup("<div class=\"wrap\">\n    <img class=\"imgg\" src=\"assets/img/mn.jpg\" alt=\"mn\">\n    <p><b>\u041C\u0430\u0439\u0434\u0430\u043D \u041D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E\u0441\u0442\u0438</b></p>\n    </div>\n");
L.marker([50.43737221628404, 30.522433535890737]).addTo(map).bindPopup("<div class=\"wrap\">\n    <img class=\"imgg\" src=\"assets/img/ds.jpg\" alt=\"ds\">\n    <p><b>\u0414\u0432\u043E\u0440\u0435\u0446 \u0441\u043F\u043E\u0440\u0442\u0430</b></p>\n    </div>\n");
L.marker([50.44891064140509, 30.537492539732874]).addTo(map).bindPopup("<div class=\"wrap\">\n    <img class=\"imgg\" src=\"assets/img/md.jpg\" alt=\"md\">\n    <p><b>\u041C\u0430\u0440\u0438\u0438\u043D\u0441\u043A\u0438\u0439 \u0434\u0432\u043E\u0440\u0435\u0446</b></p>\n    </div>\n");
var lc = L.control.locate({
  position: 'topright',
  strings: {
    title: "Show me where I am, yo!"
  }
}).addTo(map);
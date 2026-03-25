// Glide for top attractions carousel
new Glide('.glide', {
  type: 'carousel',
  autoplay: 3000
}).mount();


// Animate on scroll
AOS.init();


// LEaflet for interactive map with pins
var map = L.map('map').setView([35.6762, 139.6503], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Shibuya Crossing
L.marker([35.6595, 139.7005]).addTo(map)
  .bindPopup('Shibuya Crossing');

// Yomiuriland
L.marker([35.6244, 139.5177]).addTo(map)
  .bindPopup('Yomiuriland');

// Ueno Park
L.marker([35.7156, 139.7745]).addTo(map)
  .bindPopup('Ueno Park');


// Animated text for title
  var typed = new Typed('#typed', {
  strings: ['Visit Tokyo'],
  typeSpeed: 50,
  showCursor: false
});
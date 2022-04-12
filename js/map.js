// const map = L.map('map').setView([51.505, -0.09], 13);
// const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// const tileUrl = 'https://www.openstreetmap.org/#map=0/-14/-148'

// L.tileLayer('https://{s}.openstreetmap.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // maxZoom: 18,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    // accessToken: 'your.mapbox.access.token'
// }).addTo(map);
// tiles.addTo(map);

let mapOptions = {
    center:[51.958, 9.141],
    zoom:10
}


let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let marker = new L.Marker([51.958, 9.141]);
marker.addTo(map);
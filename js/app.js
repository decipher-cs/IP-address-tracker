
/////////////////////////////////
//*  Variables and Constants *//
///////////////////////////////

// Map initialization 

let mapOptions = {
    center: [51.958, 9.141],
    zoom: 2
}
let map = new L.map('map', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
let marker = new L.Marker([0, 0]);


// form selectors
const inputForm = document.querySelector(".hero__input-wrapper");
const inputField = document.querySelector("#ip-domain-input");

// user-input ip/domain storage 
let address;

// card selectors
const infoCard = document.querySelector(".info-card");
const ip = document.querySelector(".info-card__ip-content");
const loc = document.querySelector(".info-card__location-content");
const timezone = document.querySelector(".info-card__timezone-content");
const utc = document.querySelector(".info-card__utc-content");
const isp = document.querySelector(".info-card__isp-content");

// card collapsing pseudo element
const collapser = document.querySelector(".info-card-collapsing-wrapper");



//////////////////////
//*   Functions   *//
////////////////////

// Fill the input-card with info about the ip address
let editCard = (data) => {
    console.log(data)
    ip.textContent = data.ip.toString()
    loc.textContent = `${data.region}, ${data.city}`
    timezone.textContent = data.timezone.toString()
    isp.textContent = data.org.toString()
}

// Pan the map to match the location of the current ip address
let changeMap = (loc) => {
    map.flyTo(L.latLng(loc.latitude, loc.longitude), 12)
    marker.remove(map);
    marker = new L.marker([loc.latitude, loc.longitude])
    marker.addTo(map);
}


///////////////////////////
//*  Event Listeners   *//
//////////////////////////

// on form submit save user input address
inputForm.addEventListener("submit", (form) => {
    form.preventDefault
    address = inputField.value

    fetch(`https://ipapi.co/${address}/json`).then((req) => {
        return req.json()
    }).then((item) => {
        editCard(item);
        changeMap(item);
    })
})


collapser.addEventListener("click", (e) => {
    if (e.target.classList == "info-card-collapsing-wrapper") {
        if (infoCard.style.display == 'none') {
            infoCard.style.display = "grid"
            infoCard.style.overflow = "visible"
        } else {
            infoCard.style.overflow = "hidden"
            infoCard.style.display = "none"
        }
    }
})
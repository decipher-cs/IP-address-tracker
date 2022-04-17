/////////////////////////////////
//*  Variables and Constants *//
///////////////////////////////

// form selectors
const inputForm = document.querySelector(".hero__input-wrapper");
const inputField = document.querySelector("#ip-domain-input");

// user-input ip/domain storage 
let address;

// card selectors
const ip = document.querySelector(".info-card__ip-content");
const loc = document.querySelector(".info-card__location-content");
const timezone = document.querySelector(".info-card__timezone-title");
const utc = document.querySelector(".info-card__utc-content");
const isp = document.querySelector(".info-card__isp-content");




//////////////////////
//*   Functions   *//
////////////////////

// Fill the input-card with info about the ip address

let editCard = (data)=>{
    console.log(data)
    ip.textContent = data.ip
    loc.textContent = `${data.region}, ${data.city}`
    timezone.textContent = data.timezone
    utc.textContent = data.utc_offset
    isp.textContent = data.org
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
        editCard(item)
    })
})
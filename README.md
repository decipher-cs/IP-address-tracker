# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - IP address tracker solution](#frontend-mentor---ip-address-tracker-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./design/ip%20tracker%20desktop.png)
![](./design/ip%20tracker%20mobile.png)



### Links

- [Solution URL](https://www.frontendmentor.io/solutions/ip-address-tracker-using-the-api-leaflet-and-ipapi-rJ4ePBpE9)
- [Live Site URL](https://classy-cocada-1666ae.netlify.app/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript ES6


### What I learned

Found a nice way to fit everything in the viewport. Set body as grid and max-height as 100vh. This way everything is dynamically adjusted to fit the vertical viewport using fractional units.

```
body{
    display: grid;

    grid-template-rows: min-content 1fr min-content;

    height: 100vh;
    overflow: visible;
}

```

## Author

- Website - [decipher](https://classy-cocada-1666ae.netlify.app/)
- Frontend Mentor - [@de-cipher](https://www.frontendmentor.io/profile/de-sipher)


## Acknowledgments

- [Repository icon - Shmai from flaticon](https://www.flaticon.com/authors/shmai)
- [Leaflet](https://leafletjs.com/)
- [IPapi](https://ipapi.co/)

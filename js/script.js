// // Milestone 1:
// // Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// // Al click dell'utente sulle frecce verso sinistra o destra, la nuova immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// // creo il mio array di riferimento
// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, 

//     {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, 

//     {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, 

//     {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     },

//     {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

// // const images = ["./img/01.webp", "./img/02.webp", "./img/03.webp", "./img/04.webp", "./img/05.webp"];


// // bersagliamo lo slider
// const sliderElement = document.getElementById("slider");


// // tramite un ciclo forEach itero il mio array delle immagini
// images.forEach(function(currentElement) {
    
//     const imgElement = document.createElement("img");

//     // per ogni elemento del mio array prendo il valore della proprietà che ha come chiave "image"
//     // sliderElement.innerHTML += `<img src="./${currentElement.image}">`;
//     imgElement.src = `./${currentElement.image}`;
//     sliderElement.append(imgElement);

// });


// document.querySelector("#slider img:nth-of-type(1)").className = "active";


// // -  salvo un contatore della slide
// let slideNumber = 1;



// // -  QUANDO premo la freccia SU
// document.querySelector("#up-arrow").addEventListener("click", function() {


//     if (slideNumber < images.length) {

//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // - aumento il contatore di 1
//         slideNumber++;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

//     } else {

//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // resetto la variabile che mi conta l'immagine a cui sono arrivato
//         slideNumber = 1;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

//     }

        
// });

// // QUANDO premo la freccia GIU'
// document.querySelector("#down-arrow").addEventListener("click", function() {

//     if (slideNumber > 1) {
//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // - diminuisco il contatore di 1
//         slideNumber--;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");


//     } else {

//         // - prendo l'immagine attuale e le rimuovo la classe "active"  
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.remove("active");

//         // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
//         slideNumber = images.length;

//         // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
//         document.querySelector(`#slider img:nth-of-type(${slideNumber})`).classList.add("active");

//     }
    


// });
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, la nuova immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// creo il mio array di riferimento
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 

    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 

    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 

    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },

    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// bersagliamo lo slider
const sliderElement = document.getElementById("slider");


// tramite un ciclo forEach itero il mio array delle immagini
images.forEach(function(currentElement) {
    
    // creo il contenitore dove inserirò l'immagine e il contenitore del titolo e testo 
    const sliderListElement = document.createElement("section");
    sliderListElement.classList.add("img-container");
    // lo inserisco nello slider
    sliderElement.append(sliderListElement);

    // creo l'elemento che contiene l'immagine
    const imgElement = document.createElement("img");
    // per ogni elemento del mio array prendo il valore della proprietà che ha come chiave "image", la inserisco come src dell'immagine e la inserisco nel contenitore 
    imgElement.src = `./${currentElement.image}`;
    sliderListElement.append(imgElement);

    // creo il contenitore delle informazioni e lo inserisco nel contenitore dell'immagine
    const infoElement = document.createElement("div");
    infoElement.classList.add("info");
    sliderListElement.appendChild(infoElement);

    // creo l'elemento per il titolo
    const titleElement = document.createElement("div");
    // aggiungo il titolo preso dal mio array
    titleElement.innerText = `${currentElement.title}`;
    // lo inserisco nel suo contenitore
    infoElement.append(titleElement);

    // la stessa cosa per il testo
    const textElement = document.createElement("div");
    textElement.innerText = `${currentElement.text}`
    infoElement.append(textElement);


});


document.querySelector(".img-container").classList.add("active");


// -  salvo un contatore della slide
let slideNumber = 1;


// -  QUANDO premo la freccia GIU'
document.querySelector("#down-arrow").addEventListener("click", function() {

    carouselNext();
        
});

// QUANDO premo la freccia SU'
document.querySelector("#up-arrow").addEventListener("click", function() {

    carouselBefore();

});


// memorizzo l'elemento thumbnail
const thumbElement = document.querySelector("#thumbnails");

// creo i contenitori per le immagini da visualizzare sulla destra
// per ogni elemento del mio array "images"
images.forEach((currentElement, index) => {

    // creo il contenitore dell'immagine
    const smallImageContainerElement = document.createElement("div");
    smallImageContainerElement.classList.add("right-image");
    if(index == 0) {
        smallImageContainerElement.classList.add("active");
    }
    thumbElement.append(smallImageContainerElement);

    // creo l'immagine
    const smallImageElement = document.createElement("img");
    smallImageElement.src = `./${currentElement.image}`;
    smallImageContainerElement.append(smallImageElement);

    smallImageContainerElement.addEventListener("click",

        function() {

            // prendo il contenitore principale dell'immagine che è visibile prima del click e rimuovo la classe active
            document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.remove("active");

            document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.remove("active");
            
            // aggiorno il contatore delle frecce
            slideNumber = index + 1;

            // prendo il contenitore principale dell'immagine attuale e aggiungo la classe active
            document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.add("active");

            document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.add("active");


        }
    );

})
// fine forEach()

// creo due variabili che mi serviranno per il "setInterval()" 
let autoPlay;
let playReverse;

// memorizzo i tre bottoni
buttonStartElement = document.querySelector("#start");
buttonStopElement = document.querySelector("#stop");
buttonReverseElement = document.querySelector("#reverse");

buttonReverseElement.style.display = "none";
buttonStopElement.style.display = "none";


// quando premo stop si ferma lo scorrimento automatico delle immagini
buttonStopElement.addEventListener("click",
    function() {
        clearInterval(autoPlay);
        clearInterval(playReverse);
        // quando premo stop il bottone stesso sparisce
        // e si mostrano solo il tasto start e reverse
        buttonStopElement.style.display = "none";
        buttonStartElement.style.display = "inline-block";
        buttonReverseElement.style.display = "inline-block";
    }
)

// quando premo start ogni 3 secondi le immagini andranno avanti
buttonStartElement.addEventListener("click", 
    function() {
        autoPlay = setInterval(carouselNext, 1000);
        // quando premo start il bottone stesso e quello reverse spariscono
        // e si mostra solo il tasto stop
        buttonStartElement.style.display = "none";
        buttonStopElement.style.display = "inline-block";
        buttonReverseElement.style.display = "none";
    }
);

// quando premo reverse le immagini scorrono all'indietro
buttonReverseElement.addEventListener("click", 
    function() {
        playReverse = setInterval(carouselBefore, 1000);
        // quando premo reverse il bottone stesso e quello start spariscono
        // e si mostra solo il tasto stop
        buttonStartElement.style.display = "none";
        buttonStopElement.style.display = "inline-block";
        buttonReverseElement.style.display = "none";
    }
);


// dichiaro la funzione che rimuove la classe active all'immagine attuale, incrementa il contatore e aggiunge la classe active all'immagine successiva
// utilizzata quando clicco il tasto giù, quando clicclo su in immagine nel thumbnail,
function carouselNext() {
    
    if (slideNumber < images.length) {

        // - prendo il contenitore attuale e rimuovo la classe "active"  
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.remove("active");
        
        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.add("active");

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.add("active");

    }
}

// dichiaro la funzione che rimuove la classe active all'immagine attuale, decrementa il contatore e aggiunge la classe active all'immagine precedente
// utilizzata quanto clicclo la freccia su, quando clicco su un immagine del thumbnail
function carouselBefore() {

    if (slideNumber > 1) {
        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.remove("active");

        // - diminuisco il contatore di 1
        slideNumber--;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.add("active");


    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.remove("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.remove("active");

        // - metto il valore di slideNumebr = alla posizione dell'ultima immagine
        slideNumber = images.length;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`#slider section:nth-of-type(${slideNumber})`).classList.add("active");
        document.querySelector(`#thumbnails .right-image:nth-of-type(${slideNumber})`).classList.add("active");


    }

}


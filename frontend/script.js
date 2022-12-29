// Fake JSON Creator

function FakeJSON() {
    let dict = {
        temperatura: Math.floor(Math.random() * 101),
        ph: Math.floor(Math.random() * 11),
        mangime: Math.floor(Math.random() * 2),
        livelloAcqua: Math.floor(Math.random() * 4),
    }

    return JSON.stringify(dict)
};

// Real Time Data Updater

function RealTimeData() {

    setInterval( function() {
        let data = JSON.parse(FakeJSON());

        // Temperatura
        document.getElementById('meter-temperatura').value = data['temperatura'];
        document.getElementById('p-temperatura').innerText = data['temperatura'] + '°C';
        
        // PH
        document.getElementById('meter-ph').value = data['ph'];
        document.getElementById('p-ph').innerText = data['ph'];

        // Mangime
        document.getElementById('meter-mangime').value = data['mangime'];
        document.getElementById('p-mangime').innerText = data['mangime'] == 0 ? 'No' : 'Si';

        // Livello Acqua
        document.getElementById('meter-livello-acqua').value = data['livelloAcqua'];
        document.getElementById('p-livello-acqua').innerText = data['livelloAcqua'] == 0 ? 'Basso' : (data['livelloAcqua'] == 1 ? 'Ok' : 'Alto')

    }, 1000)
}

document.addEventListener('DOMContentLoaded', RealTimeData());

// Fullscreen Stream

function fullScreenOnOff() {

    let divStream = document.getElementById("stream");

    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        divStream.requestFullscreen();
    }
}

// Fullscreen Icon Change

function cambioIconaFullScreen() {
    let icona = document.getElementById("icona-fullscreen");

    if (icona.src.match( "./images/prima_pagina/icona_fullscreen_on.svg")) {
        icona.src = "./images/prima_pagina/icona_fullscreen_off.svg";
    } else {
        icona.src = "./images/prima_pagina/icona_fullscreen_on.svg";
    }
}

addEventListener("fullscreenchange", (event) => {cambioIconaFullScreen()});

function cambioIconaPausePlay() {
    let icons = document.getElementById("icona-pause");

    if (icons.src.match("./images/prima_pagina/pause_icon.svg")) {
        icons.src = "./images/prima_pagina/play_icon.svg";
    } else {
        icons.src = "./images/prima_pagina/pause_icon.svg";
    };
} ;
    
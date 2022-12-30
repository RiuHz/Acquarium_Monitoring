// Fake JSON Creator

function fakeJSON() {
    let dict = {
        temperatura: Math.floor(Math.random() * 101),
        ph: Math.floor(Math.random() * 15),
        mangime: Math.floor(Math.random() * 2),
        livelloAcqua: Math.floor(Math.random() * 4),
    }

    return JSON.stringify(dict)
}

// Real Time Data Updater

function realTimeData() {

    setInterval( function() {
        let data = JSON.parse(fakeJSON());

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

// Fullscreen Icon Change

function cambioIconaFullScreen() {
    let icona = document.getElementById('icona-fullscreen');

    if (icona.src.match( './images/prima_pagina/icona_fullscreen_on.svg')) {
        icona.src = './images/prima_pagina/icona_fullscreen_off.svg';
    } else {
        icona.src = './images/prima_pagina/icona_fullscreen_on.svg';
    }
}

// Define Events for Stream interaction

function defineEvents() {
    let divStream = document.getElementById('div-per-stream');
    let iconaPausa = document.getElementById('icona-pausa');
    let iconaFullscreen = document.getElementById('icona-fullscreen');

    // On Stream double click activate on / off fullscreen

    divStream.addEventListener('dblclick', (event) => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            divStream.requestFullscreen();
        }

        event.stopPropagation();
    });

    // On IconaFullscreen click activate on / off fullscreen

    iconaFullscreen.addEventListener('click', (event) => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            divStream.requestFullscreen();
        }

        event.stopPropagation();
    });

    // On IconaPausa click stop and play the Stream

    iconaPausa.addEventListener('click', (event) => {
        let stream = document.getElementById('stream');

        if (iconaPausa.src.match('./images/prima_pagina/pause_icon.svg')) {
            iconaPausa.src = './images/prima_pagina/play_icon.svg';
            stream.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        } else {
            iconaPausa.src = './images/prima_pagina/pause_icon.svg';
            stream.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        }

        event.stopPropagation();
    });

    // On IconaPausa double click stop the event from propagation

    iconaPausa.addEventListener('dblclick', (event) => {
        event.stopPropagation()
    });
}

// On Document Loaded execute this functions

document.addEventListener('DOMContentLoaded', function() {
    realTimeData();
    defineEvents();
});

// On Document fullscreen mode change execute this functions

document.addEventListener('fullscreenchange', (event) => {
    cambioIconaFullScreen();
});
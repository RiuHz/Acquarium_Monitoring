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

// Copyright Updater

function copyrightUpdater() {
    let span = document.getElementById('data-sito');

    span.innerText = new Date().getFullYear()
}

document.addEventListener('DOMContentLoaded', (event) => {
    copyrightUpdater();
    RealTimeData();
});

// Progressive bar x-index scroll

window.onscroll = function() {funzioneBarraScrollDown()};

function funzioneBarraScrollDown() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("barra").style.width = scrolled + "%";
}
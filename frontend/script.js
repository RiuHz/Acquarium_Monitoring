document.addEventListener('fullscreenchange', function (e) {
  var icona_fullscreen = document.getElementById('icona-fullscreen');

  if (!document.fullscreenElement) {
    icona_fullscreen.src = './images/icona_fullscreen_on.svg';
  }
});

function fullscreen(element) {
    var div_per_stream = document.getElementById('div-per-stream');

    if (document.fullscreenElement === null) {
      element.src = './images/icona_fullscreen_off.svg'
      if (div_per_stream.requestFullscreen) {
        div_per_stream.requestFullscreen();
      } else if (div_per_stream.webkitRequestFullscreen) {
        div_per_stream.webkitRequestFullscreen();
      } else if (div_per_stream.msRequestFullscreen) {
        div_per_stream.msRequestFullscreen();
      }

    } else {
      element.src = './images/icona_fullscreen_on.svg'
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
}

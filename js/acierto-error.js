function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
    Toastify({
      text: "yahoo",
      duration: 1000,
      gravity: "top", 
      offset: {
        x: '62rem', 
        y: '22rem',
      },
      stopOnFocus: true, 
      style: {
        background: "rgb(255, 205, 41)",
        
      },
      onClick: function(){} 
    }).showToast();
  });
  document.querySelector("#sonido-acierto").play();
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
    Toastify({
      text: "ja-ja",
      duration: 1000,
      gravity: "top", 
      offset: {
        x: '2rem', 
        y: '12rem',
      },
      stopOnFocus: true, 
      style: {
        background: "#e94057;",
      },
      onClick: function(){} 
    }).showToast();
  });

  document.querySelector("#sonido-error").play();

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}

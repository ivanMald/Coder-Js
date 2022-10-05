function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();

  Toastify({
    text: "¡Eso! sigue asi 💪 ",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #a806ab, #2a23f1)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").play();

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);

  Toastify({
    text: "Mmm, asi no! 😖 ",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #a806ab, #2a23f1)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

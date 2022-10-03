function finalizar() {
  clearInterval(cronometro);
  // if (nivelActual < niveles.length - 1) {
  //   document.querySelector("#subeNivel").classList.add("visible");
  // } else {
  //   document.querySelector("#endGame").classList.add("visible");
  // }
  nivelActual < niveles.length -1 ? document.querySelector("#subeNivel").classList.add("visible") : document.querySelector("#endGame").classList.add("visible");
  
}

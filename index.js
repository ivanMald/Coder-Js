let numeroIngresado = prompt ("Ingrese numero para cuenta atras")


while(numeroIngresado >= 1){
    document.write(numeroIngresado + " ");
    numeroIngresado--;
}
if(numeroIngresado <= 1){
    document.write("Termina la cuenta atras")
}
else if (numeroIngresado !== Number){
    document.write("Numero invalido")
}


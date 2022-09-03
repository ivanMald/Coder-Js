let newUsuario = prompt("Registrar usuario") 
let newContraseña = prompt("Registrar contraseña")
let usuario = prompt("Ingrese su usuario")
let contraseña = prompt("Ingrese su contraseña")



function iniciaSecion(){
    if(usuario != newUsuario){
        alert("Usuario incorrecto")
    } 
    if(contraseña != newContraseña){
        alert("Contraseña incorrecta")
    }else{
        bienenida()
    }
}
iniciaSecion()

function bienenida(){
    document.write("Bienvenido/a " + usuario)
}
const productos = [
    {nombre: "Coca-Cola", precio: 250},
    {nombre: "Pepsi", precio: 250},
    {nombre: "Lays", precio: 300},
    {nombre: "Doritos", precio: 350},
    {nombre: "Chetos", precio: 320},
]

let carrito = []

let seleccion = prompt("Hola ¿desea comprar algun producto? si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Ingresar si o no.")
    seleccion = prompt("¿Realmente desea comprar algo? si o no")
}

if(seleccion == "si"){
    alert("Estos son los productos")
    let todoslosProductos = productos.map((producto)=> producto.nombre + " " + producto.precio + "$")
    alert(todoslosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("Gracias por la visita, vuelva pronto.")
}

while(seleccion != "no"){
    let producto = prompt("agreagar al carrito (Coca-cola, Pepsi, Lays, Doritos, Chetos.)" )
    let precio = 0

    if(producto == "Coca-cola" || producto == "Pepsi" || producto == "Lays" || producto == "Doritos" || producto == "Chetos"){
        switch(producto){
            case "Coca-cola":
                precio = 250;
                break;
            case "Pepsi":
                precio = 250;
                break;
            case "Lays":
                precio = 300;
                break;
            case "Doritos":
                precio = 350;
                break;
            case "Chetos":
                precio = 320;
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt ("¿Cuantas unidades quiere llevar?"))

        carrito.push({producto, unidades, precio})
        console.log(carrito)
    }else{
        alert("No se encuentra disponible ese producto")
    }

    seleccion = prompt("¿Agregar otro producto? si o no")
    while(seleccion === "no"){
        alert("Gracias por la su compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`Total a pagar: ${total} `)
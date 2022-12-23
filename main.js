// Array con objectos para trabajar con el simulador
const productos = [
    { nombre: "Coca 500ml", precio: 200 },
    { nombre: "Sprite 500ml", precio: 200 },
    { nombre: "Seven Up 500ml", precio: 200 },
    { nombre: "Fanta 500ml", precio: 200 },
    { nombre: "Mirinda 500ml", precio: 200 },
    { nombre: "Pepsi 500ml", precio: 200 },
    { nombre: "Manaos 500ml", precio: 200 },
];

const carrito = [];
// ################ //

alert('Bienvenido a Bebidas Frescas!');

let preguntaDeCompra = prompt('Si usted desea ver los productos ingrese si, en caso contrario ingrese no').toLowerCase();

// Bucle while para empezar con el simulador
while (preguntaDeCompra != "si" && preguntaDeCompra != "no") {
    alert('Por favor ingrese acorde sus nececidades');
    preguntaDeCompra = prompt('Desea ver los productos disponibles?').toLowerCase();
}

if (preguntaDeCompra == "si") {
    alert("A continuacion se mostrara la lista de productos");
    let listaDeProductos = productos.map(el =>
        el.nombre + " " + el.precio + "$")
    alert(listaDeProductos.join(" - "));
} else if (preguntaDeCompra == "no") {
    alert('Gracias por su tiempo!!');
}


while (preguntaDeCompra != "no") {
    let producto = prompt("Ingrese el producto al carrito , escribiendo su nombre").toLowerCase();
    let precio = 0;

    if (producto == "coca" || producto == "sprite" || producto == "seven up" || producto == "fanta" || producto == "mirinda" || producto == "pepsi" || producto == "manaos") {
        switch (producto) {
            case "coca":
                precio = 200;
                break;
            case "sprite":
                precio = 200;
                break;
            case "pepsi":
                precio = 200;
                break;
            case "fanta":
                precio = 200;
                break;
            case "mirinda":
                precio = 200;
                break;
            case "manaos":
                precio = 200;
                break;
            case "seven up":
                precio = 200;
                break;
        }
        let unidades = parseInt(prompt('Ingrese la cantidad de unidades que desee del producto seleccionado'));
        carrito.push({producto,unidades,precio})
    } else {
        alert('No tenemos disponible ese producto')
    }
    preguntaDeCompra = prompt('Desea seguir agregando productos al carrito')

    while (preguntaDeCompra === "no") {
        alert('Gracias por su compra!');
        carrito.forEach((elemento) => {
            console.log(`producto: ${elemento.producto}, unidades: ${elemento.unidades}, precio total por producto : ${elemento.unidades * elemento.precio}`)
        })
        break;
    }
}

const precioTotal = carrito.reduce((acc, el) => 
    acc + el.precio * el.unidades , 0)

console.log(`el precio total a pagar es : ${precioTotal}`);

// funcion para encontrar un producto
function productoFiltro(array, filtro) {
    const filtrado = array.find((elemento) => {
        return elemento.nombre.includes(filtro)
    })
    return filtrado;
}


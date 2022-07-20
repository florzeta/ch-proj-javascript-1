# ch-proj-javascript-1

//PRIMER DESAFIO
//entrada = prompt ("Jugamos? Adivina el numero del 1 al 10 para poder entrar");
//while (entrada != "6") {
//    alert(" es incorrecto " + entrada);
//    entrada = prompt("Intenta de nuevo");
//}

//SEGUNDO DESAFIO
/*let nombre = prompt("Ingresar nombre");
let edad = prompt("Ingresar edad");
let email = prompt("Ingresar email");
let phone = prompt("Ingresar telefono")
let username = prompt("Ingresar username");


function puedeIngresar(edadIng){
    if(edadIng < 18){ alert("No puede ingresar"); return;}
}
puedeIngresar(edad);


const validations = (nombre, edad, email, phone, username) =>{
    let isValidNombre, isValidEdad, isValidEmail, isValidPhone, isValidUsername;
    if(isNaN(edad) || isNaN(phone)){
        alert("Por favor revise los datos y vuelva a intentar");
        let edad = prompt("Ingresar edad");
        let phone = prompt("Ingresar telefono");
        return {edad, email};
    }

    console.log(
        nombre,
        edad,
        email,
        phone,
        username
    );
    console.log(
        isValidNombre,
        isValidEdad,
        isValidEmail,
        isValidPhone,
        isValidUsername
    );
}*/

//TERCER DESAFIO

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    iva() {
        let conIva = this.precio * 1.21;
        return conIva;
    }
}
const productos = [];
productos.push(new Producto(productos.length, "Bolsa De Macrame", "$456"));
productos.push(new Producto(productos.length, "Cubiertos Resina", "$23"));
productos.push(new Producto(productos.length, "Cepillo De Caña", "$488"));
productos.push(new Producto(productos.length, "SET bolsitas", "$56"));
productos.push(new Producto(productos.length, "Cepillo Exfoliador", "$98"));
productos.push(new Producto(productos.length, "Esponja Natural", "$69"));

let carrito = [];

let res1 = confirm("Hola esta es la tienda virtual, se presentara un menú para elegir, para salir ingrese 0.")
let entrada = 1
if (res1) {
    do {
        entrada = prompt("1. Ver Productos \n 2. Crear Carrito \n 3. Enviar mail")
        if (!entrada) {
            entrada = 0;
        }
        if (entrada != 0) {
            switch (entrada) {
                case "1":
                    ImprimirProductos(productos);
                    break;
                case "2":
                    comprarProductos(productos);
                    break;
                case "3":
                    // code block
                    break;
                default:
                    // code block
                    break;
            }
        }
    } while (entrada != 0)
}
function ImprimirProductos(listaProductos) {
    let impresion = listarProductos(listaProductos);
    return confirm(impresion);
    
}

function ListarCarrito(listaCarrito){
    let respuesta = "---ID--NOMBRE---PRECIO----CANTIDAD\n\n";
    for (let i=0;i<listaCarrito.length;i++){
        respuesta+=listaCarrito[i][0].id+" - "+listaCarrito[i][0].nombre+" - "+listaCarrito[i][0].precio+" - "+listaCarrito[i][1]+"\n"
    }
    return respuesta;
}

function listarProductos(listaProductos) {
    console.log("1")
    let respuesta = "ID --- NOMBRE -- PRECIO -\n";
    console.log("2")
    for (let i = 0; i < listaProductos.length; i++) {
        console.log("3")
        respuesta += ("- " + (parseInt(listaProductos[i].id) + 1) + " -");
        respuesta += ("- " + listaProductos[i].nombre + " -");
        respuesta += ("- " + listaProductos[i].precio + " -\n");
    }
    return respuesta;
}

function comprarProductos(listaProductos) {
    res4 = confirm("Crear Carrito - Se van a mostrar los productos y usted ingresa el numero del producto, luego se consultará la cantidad. Para salir ingrese 0.");
    if (res4) {
        do {
            try {
                let impresion = listarProductos(listaProductos);
                res5 = prompt(impresion);
                if (res5 != 0) {
                    nuevoProducto = listaProductos[parseInt(res5) - 1];
                    let res6 = prompt("cuantos " + nuevoProducto.nombre + " de " + nuevoProducto.precio + " necesitas?");
                    let res7 = confirm("Seguro agregamos " + res6 + " " + nuevoProducto.nombre + " ?")
                    if (res7) {
                        carrito.push([nuevoProducto, res6]);
                    }
                }
            } catch { }
        } while (res5 != 0)
    }
    alert("Listado final:\n\n"+ListarCarrito(carrito));
}

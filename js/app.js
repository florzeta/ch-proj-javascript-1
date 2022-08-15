

const productos = [];

class Producto {
    constructor(id,nombre,img,precio,descripcion){
    this.id = id;
    this.nombre = nombre;
    this.img = img;
    this.precio = precio;
    this.descripcion = descripcion;
    }
}



const traerProductos = async() => {
    const contenedorProductos = document.getElementById("producto-contenedor");

    try{
        const response = await fetch("./stock.json");
        const productos = await response.json();
        console.log(productos);
        productos.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML =  `
                <div class="card" id="productos">
                <div class="image-product">
                    <img src="${producto.img}" alt="">
                </div>
                <div class="content"> 
                    <div class="productName">
                    <h3>${producto.nombre}</h3>
                </div>
                        <div class="price"> $ ${producto.precio}</div>
                        <div class="descripcion">
                            <p>${producto.descr}</p>
                        </div>
                            
                        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart open-carrito"></i></button>
                    </div>
                    `;   
                
                    contenedorProductos.append(div);
            });
        }catch (error){
            console.log(error);
    }
};

    traerProductos();
    export {productos};

    // let main = function(){
//     datosRegistro();
// }

// let datosRegistro = function(){
//     document.querySelector("botonRegistro").setAttribute("onclick", "dataRead()");
// }


// let dataRead = function(){
//     console.log("Registrando datos del formulario");
//     console.log(
//         document.querySelector("#nombre").value,
//         document.querySelector("#apellido").value,
//         document.querySelector("#email").value,
//         document.querySelector("#pass").value,
//     );

//     let usuarioCreado = {
//         nombre : document.querySelector("#nombre").value,
//         apellido : document.querySelector("#apellido").value,
//         email : document.querySelector("#email").value,
//         password : document.querySelector("#pass").value,
//     };

//     console.log(usuarioCreado);
//     //JSON (paso objeto(usuarioCreado) a string)
//     console.log(JSON.stringify(usuarioCreado));
//     //Guardo datos del form en Localstorage
//     save_localStorage(usuarioCreado);
// }

// let save_localStorage= function(usuarioOk){
//     localStorage.setItem("datosCargados", JSON.stringify(usuarioOk));
// }
// let read_localStorage = function(){
//     let usuarioOk = localStorage.getItem("datosCargados");
//     console.log(datosCargados);
//     let usuarioCreado = JSON.parse(datosCargados);
//     console.log(usuarioCreado);

// }

        
//         contenedorProductos.appendChild(div)
//         const boton = document.getElementById(`agregar${producto.id}`)
        
//         boton.addEventListener('click', ()=> {
//             cargarProductoEnCarrito(producto.id)
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Your work has been saved',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } )
//     } )
    
    
// }


// // const agregarAlcarrito = (prodId) => {
// //     const item = productos.find((prod) => prod.id === prodId)
// //     carritoIndex.push(item)
// //     actualizarCarrito()
// //     console.log(carritoIndex)
// // }

// const actualizarCarrito = () =>{
//     carritoIndex.forEach((prod) => {
//         const div = document.createElement('div')
//         div.className = ('productoEnCarrito')
//         div.innerHTML = `
//         <p>${prod.nombre}</p>
//         <p>Precio: ${prod.precio}</p>
//         <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
//         `
//     })
// }
// let dataProductos = imprimirProductos();
// // mostrarProductos(productos);



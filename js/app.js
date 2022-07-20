import { productos } from './stock.js' 
import { carritoIndex } from './carritoIndex.js';

const mostrarProductos = (productos) => {
    let contenedorProductos = document.getElementById('producto-contenedor');

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML +=  `
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
                            <p>${producto.descripcion}</p>
                            </div>
                <a href="#" class="btn" id=boton${producto.id}> Añadir</a>
             </div>
        </div>
        `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`boton${producto.id}`)
    boton.addEventListener('click', ()=>{
        carritoIndex(producto.id)
        alert(`Se agrego ${producto.nombre}`)

    } )

    } )

}

mostrarProductos(productos)
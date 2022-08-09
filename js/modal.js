const openModal = document.querySelector('.open-modal');

const modal = document.querySelector('.modal');

const closeModal = document.querySelector('.modal_close');

const modalContenedor = document.querySelector('.modal_container');

const abrirCarrito = document.getElementById('open-carrito');

const cerrarCarrito = document.getElementById('cerrar');

const modalCarrito = document.querySelector('.modal-carrito');



openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal-show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal-show');
});


abrirCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.toggle('open-carrito');
});

cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('open-carrito');
});

modalContenedor.addEventListener('click',() =>{
    cerrarCarrito.click();
});


modalCarrito.addEventListener('click', (e) =>{
    e.stopPropagation();
});
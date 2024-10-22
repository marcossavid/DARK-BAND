// Selecciona todos los elementos que tienen la clase '.comprar-btn' (los botones de "Agregar al carrito")
const addToCartButton = document.querySelectorAll('.comprar-btn');

// Selecciona el elemento con el id 'cart-notification' (el puntito de notificación)
const cartNotification = document.getElementById('cart-notification');

// Añadir un evento de clic a cada botón de "Agregar al carrito"
addToCartButton.forEach(button => {  // Itera sobre cada botón en la lista 'addToCartButton'
    button.addEventListener('click', function() { // Añade un escuchador de eventos de clic a cada botón
        // Mostrar el puntito de notificación cuando se hace clic en el botón
        cartNotification.style.display = 'block';  // Cambia el estilo 'display' a 'block', haciendo visible el puntito
    });
});










// Obtener elementos
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');

const goToCartButton = document.getElementById('go-to-cart');
const continueShoppingButton = document.getElementById('continue-shopping');

// Función para abrir el modal
function openModal() {
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Agregar evento al botón de agregar al carrito
const addToCartButtons = document.querySelectorAll('.comprar-btn'); 
addToCartButtons.forEach(button => {
    button.addEventListener('click', openModal);
});

// Agregar evento al botón de cerrar
closeButton.addEventListener('click', closeModal);

// Cerrar el modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Agregar redirección al carrito
goToCartButton.addEventListener('click', function() {
    window.location.href = 'carrito.html'; // Cambia esto a la URL de tu carrito
});

// Cerrar el modal y continuar comprando
continueShoppingButton.addEventListener('click', closeModal);










const eliminarButtons = document.querySelectorAll('.eliminar');

eliminarButtons.forEach(button => {
    button.addEventListener('click', function() {
        const boxcarrito = this.parentElement; // Obtiene el padre del botón
        boxcarrito.remove(); // Elimina el boxcarrito del DOM
    });
});
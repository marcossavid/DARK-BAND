// Selecciona todos los elementos que tienen la clase '.btn' (los botones de "Agregar al carrito")
const addToCartButton = document.querySelectorAll('.btn');

// Selecciona el elemento con el id 'cart-notification' (el puntito de notificación)
const cartNotification = document.getElementById('cart-notification');

// Añadir un evento de clic a cada botón de "Agregar al carrito"
addToCartButton.forEach(button => {  // Itera sobre cada botón en la lista 'addToCartButton'
    button.addEventListener('click', function() { // Añade un escuchador de eventos de clic a cada botón
        // Mostrar el puntito de notificación cuando se hace clic en el botón
        cartNotification.style.display = 'block';  // Cambia el estilo 'display' a 'block', haciendo visible el puntito
    });
});
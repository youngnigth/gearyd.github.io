let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
    console.log(`Producto agregado: ${productName} - $${price.toFixed(2)}`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    // Limpia el contenido actual del carrito
    cartItems.innerHTML = '';

    // Recorre los productos en el carrito y los muestra
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(cartItem);
    });

    // Actualiza el contador de productos y el total
    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0]; // Elimina el producto del carrito
    total -= removedItem.price; // Actualiza el total
    updateCart(); // Actualiza la vista del carrito
    console.log(`Producto eliminado: ${removedItem.name} - $${removedItem.price.toFixed(2)}`);
}

function toggleCart() {
    const cartOverlay = document.getElementById('cart-overlay');
    cartOverlay.style.display = cartOverlay.style.display === 'flex' ? 'none' : 'flex';
}

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }
    alert('Gracias por su compra!');
    cart = []; // Vacía el carrito
    total = 0; // Reinicia el total
    updateCart(); // Actualiza la vista del carrito
    toggleCart(); // Cierra el carrito
}
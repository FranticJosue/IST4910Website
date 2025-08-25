let cart = [];

// Add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart!");
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // <-- NEW: refresh cart display after adding
}

// NEW: Remove item from cart by index
function removeFromCart(index) {
    let removedItem = cart.splice(index, 1); // remove 1 item at position index
    alert(removedItem[0].name + " removed from cart!");
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // refresh display
}

// Load and display cart
function loadCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDiv = document.getElementById('cartItems');
    if (cartDiv) {
        cartDiv.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => { // <-- edit here: add index to create remove buttons
            cartDiv.innerHTML += `
                <p>${item.name} - $${item.price} 
                <button onclick="removeFromCart(${index})">Remove</button></p>`;
            total += item.price;
        });
        cartDiv.innerHTML += `<hr><p>Total: $${total}</p>`;
    }
}

window.onload = loadCart;

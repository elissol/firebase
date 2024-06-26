document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cart-items');
    
    cart.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${item.produto}</td><td>${item.peso}g</td><td>${item.quantidade}</td><td>R$${item.total.toFixed(2)}</td>`;
        cartItems.appendChild(row);
    });
});

function clearCart() {
    sessionStorage.removeItem('cart');
    location.reload();
}


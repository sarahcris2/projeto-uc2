
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
`;

    document.getElementById('alerts').appendChild(alertDiv);

    // Remove o alerta após 3 segundos
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

function finalizarCompra() {
    if (cart.length === 0) {
        showAlert('🛒 Seu carrinho está vazio! Adicione itens antes de finalizar.', 'warning');
        return;
    }

    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    showAlert(`✅ Compra finalizada com sucesso! Total: R$ ${total.toFixed(2)}`, 'success');

    // Correção no fechamento do modal
    const modalElement = document.getElementById('cartModal');
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);
    // modal.hide();

    clearCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cartCount').textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;

    cartItems.innerHTML = cart.map(item => `
    <div class="d-flex justify-content-between align-items-center mb-3">
        <div>
            <h6>${item.name}</h6>
            <p class="mb-0">${item.quantity} x R$ ${item.price.toFixed(2)}</p>
        </div>
        <div>
            <button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">×</button>
        </div>
    </div>
`).join('');

    total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function addToCart(id, name, price) {
    console.log('Item adicionado:', id, name, price);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
    showAlert(`✔️ ${name} adicionado ao carrinho!`, 'success');
}

function removeItem(id) {
    const item = cart.find(item => item.id === id);
    cart = cart.filter(item => item.id !== id);
    updateCart();
    showAlert(`🗑️ ${item.name} removido do carrinho!`, 'danger');
}

function clearCart() {
    if (cart.length > 0) {
        showAlert('🧹 Carrinho limpo com sucesso!', 'info');
    }
    cart = [];
    updateCart();
}

// Inicializar carrinho
updateCart();

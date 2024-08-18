// To-Do List
document.getElementById('addTodoButton').addEventListener('click', () => {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoList = document.getElementById('todoList');
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <button onclick="removeTodoItem(this)">Remove</button>
        `;
        todoList.appendChild(todoItem);
        todoInput.value = '';

        saveTodos();
    }
});

function removeTodoItem(button) {
    const todoItem = button.parentElement;
    todoItem.remove();
    saveTodos();
}

function saveTodos() {
    const todoItems = document.querySelectorAll('.todo-item span');
    const todos = Array.from(todoItems).map(item => item.textContent);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.forEach(todoText => {
        const todoList = document.getElementById('todoList');
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <button onclick="removeTodoItem(this)">Remove</button>
        `;
        todoList.appendChild(todoItem);
    });
}

loadTodos();

// Add-to-Cart Functionality
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function addToCart(item, price) {
    const cartItem = cart.find(cartItem => cartItem.item === item);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ item, price, quantity: 1 });
    }
    saveCart();
    renderCart();
}

function removeFromCart(item) {
    const cartItemIndex = cart.findIndex(cartItem => cartItem.item === item);
    if (cartItemIndex > -1) {
        cart[cartItemIndex].quantity--;
        if (cart[cartItemIndex].quantity === 0) {
            cart.splice(cartItemIndex, 1);
        }
    }
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(cartItem => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <span>${cartItem.item} ($${cartItem.price} x ${cartItem.quantity})</span>
            <button onclick="removeFromCart('${cartItem.item}')">Remove</button>
        `;
        cartItems.appendChild(cartItemDiv);
    });

    const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    document.getElementById('cartTotal').innerText = `Total: $${total}`;
}

renderCart();

document.addEventListener('DOMContentLoaded', function () {
    const button = document.createElement('button');
    button.textContent = '<- go back';
    button.addEventListener('click', function () {
        window.location.href = '../../index.html'; // Replace with your desired URL
    });
    document.body.appendChild(button);
});

import { products } from "./products";
console.log(JSON.parse(sessionStorage.getItem("User")))
let user=JSON.parse(sessionStorage.getItem("User"));
console.log(user);
isLoggedIn();


function isLoggedIn(){
    if(user==null){
        alert("Login First !!");
        window.location.href="login.html"
    }
}

function logOut(){
    window.sessionStorage.clear();
    alert("Logged Out !!");
    location.reload();
    window.location.href="login.html"
    
}





const userWelcome = document.querySelector(".name");
userWelcome.innerHTML="@"+user.u;
document.addEventListener('DOMContentLoaded', () => {
    const categoryFilters = document.querySelectorAll('.category-filter');
    const priceFilters = document.querySelectorAll('.price-filter');
    const productGrid = document.querySelector('.product-grid');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const cartItemsContainer = document.getElementById('cart-items');

    

    function addPrduct(){
        console.log(products)
    }
  

    let cart = [];

    function renderProducts(filteredProducts) {
        productGrid.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.link}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.link}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        renderCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        renderCart();
    }

    function filterProducts() {
        const selectedCategories = Array.from(categoryFilters)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        const selectedPrice = Array.from(priceFilters)
            .find(radio => radio.checked)?.value;

        let filteredProducts = products;

        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                selectedCategories.includes(product.category)
            );
        }

        if (selectedPrice) {
            const [minPrice, maxPrice] = selectedPrice.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product =>
                product.price >= minPrice && product.price <= maxPrice
            );
        }

        renderProducts(filteredProducts);
    }

    categoryFilters.forEach(checkbox => checkbox.addEventListener('change', filterProducts));
    priceFilters.forEach(radio => radio.addEventListener('change', filterProducts));

    renderProducts(products); // Initial render

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    // Expose functions to global scope
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
});

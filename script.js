// Cart array
let cart = [];

// Add to cart function
function addToCart(productName, price) {
    const product = {
        name: productName,
        price: price
    };
    cart.push(product);
    alert(productName + ' added to cart!');
    console.log('Current cart:', cart);
}

// Contact form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
        return false;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email!');
        return false;
    }

    alert('Message sent successfully!');
    return false;
}
}

// Display cart
function showCart() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        let cartDisplay = 'Items in cart:\n\n';
        let total = 0;
        cart.forEach(item => {
            cartDisplay += item.name + ' - $' + item.price + '\n';
            total += item.price;
        });
        cartDisplay += '\nTotal: $' + total;
        alert(cartDisplay);
    }
}

// Clear cart
function clearCart() {
    cart = [];
    alert('Cart cleared!');
  }

// Page load animation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded successfully!');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

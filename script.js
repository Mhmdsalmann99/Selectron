document.addEventListener('DOMContentLoaded', function () {

    // Cart functionality
    let cart = [];

    // Add products to the cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('p').innerText;

            // Add product to the cart array
            cart.push({ name: productName, price: productPrice });

            // Show confirmation to the user
            alert(`${productName} added to cart!`);
            console.log(cart); // You can check the cart in the console for debugging
        });
    });

    // Contact form validation
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', function (event) {
        const emailField = form.querySelector('input[type="email"]');
        const messageField = form.querySelector('textarea');

        const email = emailField.value.trim();
        const message = messageField.value.trim();

        // Check if both fields are filled
        if (!email || !message) {
            alert('Please fill in both fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            // If everything is valid
            alert('Message sent successfully!');
            form.reset(); // Reset the form fields
        }
    });

});
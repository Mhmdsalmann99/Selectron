// Search functionality
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const productDescription = product.querySelector('p').textContent.toLowerCase();
        
        if (productName.includes(query) || productDescription.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Category filter functionality
function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

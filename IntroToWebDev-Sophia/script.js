document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.classesconbutton');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            alert('Added to cart!'); 
        });
    });
})
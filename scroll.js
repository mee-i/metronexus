
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');

   
    if (window.scrollY > 5) {
        navbar.classList.add('solid'); 
    } else {
        navbar.classList.remove('solid'); 
    }
});

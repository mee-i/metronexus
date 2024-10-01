// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');

   
//     if (window.scrollY > 5) {
//         navbar.classList.add('solid'); 
//     } else {
//         navbar.classList.remove('solid'); 
//     }
// });

$(document).ready(function () {
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        $('#mainListDiv').toggleClass('show');
    });
    
    // Mengubah warna navbar saat scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').css('background-color', '#222');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });
});

function range(start, end, step = 1) {
    var result = [];
    for (var i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

// const NavbarItems = [
//     document.querySelector(),
//     document.querySelector(),
//     document.querySelector(),
//     document.querySelector(),
// ];

// window.addEventListener('scroll', function() {
//     const navbar = document.querySelector('.navbar');

   
//     if (window.scrollY > 5) {
//         navbar.classList.add('solid'); 
//     } else {
//         navbar.classList.remove('solid'); 
//     }
// });

// $(document).ready(function () {
//     $('.navTrigger').click(function () {
//         $(this).toggleClass('active');
//         $('#mainListDiv').toggleClass('show');
//     });
    
//     // Mengubah warna navbar saat scroll
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) {
//             $('.navbar').css({
//                 'background-color': 'rgba(0, 0, 0, 0.1)',
//                 'backdrop-filter': 'blur(10px)' // Tetap mempertahankan backdrop-filter
//             });
//         } else {
//             $('.navbar').css('background-color', 'transparent');
//         }
//     });
// });

// $(document).ready(function () {
//     $('.navTrigger').click(function () {
//         $(this).toggleClass('active');
//         $('#mainListDiv').toggleClass('show');
//     });

//    
//     $(window).scroll(function () {
//         var scrollTop = $(this).scrollTop();
//         var homeHeight = $('.home').outerHeight(); 
//         var sliderHeight = $('.slider').outerHeight(); 
//         var totalHeight = homeHeight + sliderHeight; 

//         // Jika scroll berada di section slider
//         if (scrollTop >= homeHeight && scrollTop < totalHeight) {
//             $('.navbar').css({
//                 'background-color': 'rgba(0, 0, 0, 0.1)',
//                 'backdrop-filter': 'blur(10px)' 
//             });
//         }  else {
//             
//             $('.navbar').css({
//                 'background-color': 'transparent',
//                 'backdrop-filter': 'none'
//             });
//         }
//     });
// });

$(document).ready(function () {
    // Mengatur klik untuk toggle navTrigger
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        $('#mainListDiv').toggleClass('show');
    });

    // Mengubah gaya navbar saat scroll
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var homeHeight = $('.home').outerHeight(); 
        var dummyHeight = $('#dummy').outerHeight(); 
        var sliderHeight = $('.slider').outerHeight(); 
        var totalHeight = homeHeight + dummyHeight + sliderHeight; 

       
        if (scrollTop >= homeHeight + dummyHeight) {
            $('.navbar').css({
                'background-color': 'rgba(80, 80, 80, .6)',
                'backdrop-filter': 'blur(20px)',
                'transition': 'all .2s',
            });
        } else {
           
            $('.navbar').css({
                'background-color': 'rgba(0, 0, 0, .3)',
                'backdrop-filter': 'none',
                'transition': 'all .2s',
            })
        }
    });
});

const options = {
    root: null,
    rootMargin: "0px",
    threshold: .8,
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        console.log('isIntersecting == ', entry.isIntersecting);
        console.log('intersection', entry.intersectionRatio);
    });
}, options);

observer.observe(document.querySelector("section.home"));

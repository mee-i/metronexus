// const tombols = [
//     document.querySelector('.slider-button.kiri'),
//     document.querySelector('.slider-button.kanan'),
// ];

// const elemenDiscroll = document.querySelector('.scroll-container');
// const sliderElements = elemenDiscroll.children[0].children;

// const slideIndicator = document.querySelector('.slide-pos');

// var scrollings = 0;

// console.log('tombols', tombols, 'elementDiscroll', elemenDiscroll, 'scrollings', scrollings);

// function setPosition() {
//     var element = sliderElements[scrollings];
//     var x = element.getBoundingClientRect().left + elemenDiscroll.scrollLeft - 40;
//     elemenDiscroll.scroll({top: 0, left: x, behavior: 'smooth'});
//     console.log('tombols', tombols, 'elementDiscroll', elemenDiscroll, 'scrollings', scrollings, 'x', x, 'scrollWidth', elemenDiscroll.scrollWidth);
//     resetSliderIndicator();
//     if (x + 20 > elemenDiscroll.scrollWidth - window.innerWidth) {
//         slideIndicator.children[slideIndicator.children.length - 1].style.width = '15px';
//         if (scrollings < sliderElements.length - 1) scrollings--;
//     }
//     else if (x - 20 < 0) {
//         slideIndicator.children[0].style.width = '15px';
//         scrollings = 0;
//     }
//     else {
//         slideIndicator.children[scrollings].style.width = '15px';
//     }

// }

// function initSlider() {
//     for (var i = 0; i < sliderElements.length; i++) {
//         var dot = document.createElement('div');
//         slideIndicator.appendChild(dot);
//     }
//     resetSliderIndicator();
// }

// function resetSliderIndicator() {
//     for (var indicator of slideIndicator.children) {
//         indicator.style.width = '5px';
//     }
// }

// initSlider();
// setPosition(scrollings);

// console.log('Scroll load');
// tombols[0].onclick = function() {
//     scrollings = Math.max(scrollings - 1, 0);
//     setPosition();
// }

// tombols[1].onclick = function() {
//     scrollings = Math.min(scrollings + 1, elemenDiscroll.children[0].children.length - 1);
//     setPosition();
// }

// window.addEventListener('resize', setPosition);


// document.addEventListener('load', scrollLoad);

const tombols = [
    document.querySelector('.slider-button.kiri'),
    document.querySelector('.slider-button.kanan'),
];

const elemenDiscroll = document.querySelector('.scroll-container');
const sliderElements = elemenDiscroll.children[0].children;

const slideIndicator = document.querySelector('.slide-pos');

var scrollings = Math.floor(sliderElements.length / 2); // Mulai dari tengah

// console.log('tombols', tombols, 'elementDiscroll', elemenDiscroll, 'scrollings', scrollings);

function setPosition() {
    var element = sliderElements[scrollings];
    var x = element.getBoundingClientRect().left + elemenDiscroll.scrollLeft - 
            (window.innerWidth / 2) + (element.offsetWidth / 2);

    elemenDiscroll.scroll({
        top: 0, 
        left: x, 
        behavior: 'smooth'
    });

    // console.log('tombols', tombols, 'elementDiscroll', elemenDiscroll, 'scrollings', scrollings, 'x', x, 'scrollWidth', elemenDiscroll.scrollWidth);
    
    resetSliderIndicator();
    
    if (x + 20 > elemenDiscroll.scrollWidth - window.innerWidth) {
        slideIndicator.children[slideIndicator.children.length - 1].style.width = '15px';
        if (scrollings < sliderElements.length - 1) scrollings--;
    } else if (x - 20 < 0) {
        slideIndicator.children[0].style.width = '15px';
        scrollings = 0;
    } else {
        slideIndicator.children[scrollings].style.width = '15px';
    }
}

function initSlider() {
    for (var i = 0; i < sliderElements.length; i++) {
        var dot = document.createElement('div');
        slideIndicator.appendChild(dot);
    }
    resetSliderIndicator();
    // Set posisi indikator bulatan ke tengah
    slideIndicator.children[scrollings].style.width = '15px'; 
}

function resetSliderIndicator() {
    for (var indicator of slideIndicator.children) {
        indicator.style.width = '5px'; 
    }
}

// Scroll ke posisi default tanpa animasi saat halaman dimuat
function setPositionInitial() {
    var element = sliderElements[scrollings];
    var x = element.getBoundingClientRect().left + elemenDiscroll.scrollLeft - 
            (window.innerWidth / 2) + (element.offsetWidth / 2);

    elemenDiscroll.scroll({
        top: 0, 
        left: x // Tanpa animasi
    });
}

initSlider();
setPositionInitial(); // Posisi awal di tengah saat halaman dimuat

tombols[0].onclick = function() {
    scrollings = Math.max(scrollings - 1, 0);
    setPosition();
};

tombols[1].onclick = function() {
    scrollings = Math.min(scrollings + 1, elemenDiscroll.children[0].children.length - 1);
    setPosition();
};

window.addEventListener('resize', setPosition); // Tambahkan animasi saat resize

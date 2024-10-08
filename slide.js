const tombols = [
    document.querySelector('.tombol-uji-coba.kiri'),
    document.querySelector('.tombol-uji-coba.kanan'),
];

const elemenDiscroll = document.querySelector('.scroll-container');

var scrollings = 0;

console.log('tombols', tombols, 'elementDiscroll', elemenDiscroll, 'scrollings', scrollings);

// function scrollLoad() {
    console.log('Scroll load');
    tombols[0].onclick = function() {
        scrollings = Math.max(scrollings - 1, 0);
        var element = elemenDiscroll.children[0].children[scrollings];
        var x = element.getBoundingClientRect().left + elemenDiscroll.scrollLeft - 40;
        elemenDiscroll.scroll({top: 0, left: x, behavior: 'smooth'});
        console.log('tombols', tombols, 'elementDiscroll', elemenDiscroll, 'scrollings', scrollings, 'x', x);
        // element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
    
    tombols[1].onclick = function() {
        scrollings = Math.min(scrollings + 1, elemenDiscroll.children[0].children.length - 1);
        var element = elemenDiscroll.children[0].children[scrollings];
        var x = element.getBoundingClientRect().left + elemenDiscroll.scrollLeft - 40;
        elemenDiscroll.scroll({top: 0, left: x, behavior: 'smooth'});
        console.log('tombols', tombols, 'elementDiscroll', elemenDiscroll, 'scrollings', scrollings, 'x', x);
        // element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
// }

// document.addEventListener('load', scrollLoad);
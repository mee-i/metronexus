// let currentSlide = 0;

// const slides = [
//     {
//         image: 'tech1.jpg',
//         mainTitle: 'URHGUJROFORJSFOJAEJFAJFJAFAFA',
//         subTitle: '1. Mendesain Sesuai Kondisi Alam',
//         descriptions: [
//             'Lebih dari 75% kawasan hijau di Kawasan Pemerintahan IKN.',
//             '100% penduduk dapat mengakses ruang terbuka hijau rekreasi dalam 10 menit.',
//             '100% konstruksi ramah lingkungan untuk setiap bangunan bertingkat institusional, komersial, dan hunian.'
//         ]
//     },
//     {
//         image: 'tech2.jpg',
//         mainTitle: 'HFGURHFHSIHFISHF',
//         subTitle: '2. YFGEIFGIAGFIAIFGIAFIAFIAG',
//         descriptions: [
//             'GYGUYGFEYGEGFGAEFGIYEAFGGAFGAFIAGFIYAGFYGAFGA',
//             'DUHGVFEUYGFYBAESIFDBEABIYABFIBAIFYIAFIEBAFBEAFYAEBFYAE',
//             'DNBEHBFEBFBEFBEABIFBAEBFIAFIAFIABFIBAIFBAFEBIFUEAFBEHBFIEFIEBFIBAFE'
//         ]
//     },
//     {
//         image: 'tech3.jpg',
//         mainTitle: 'FRIHISFIBSRIBFIRBGIRBGIBRSIGISRGI',
//         subTitle: '3. FRENFIURFINRSNRNGNRNGRNGRNGROGRGR',
//         descriptions: [
//             'JHI9RUHGUHSHSHFOUHSFOSREJFOJRSJFIORIFOJRFJRJFRJFJSJFOSJFOSJ',
//             'IHGINIFNSAUFNEANFOSNFENAFNAENFAENFOAFOANFA',
//             'BRFGBRFINSFNEAFNEANFNEAFNAFNANFANFANFNAFNA'
//         ]
//     }
// ];

// function showSlide(index) {
//     let slide = slides[index];
//     document.getElementById('sliderImage').src = slide.image;
//     document.getElementById('mainTitle').innerText = slide.mainTitle; 
//     document.getElementById('subTitle').innerText = slide.subTitle;
//     document.getElementById('description1').innerText = slide.descriptions[0];
//     document.getElementById('description2').innerText = slide.descriptions[1];
//     document.getElementById('description3').innerText = slide.descriptions[2];
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentSlide);
// });
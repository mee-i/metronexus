function toggleDropdown(event, elem) {
    console.log(event);
    console.log('Target: ', elem);
    console.log('next', elem.nextElementSibling);
    event.preventDefault(); // Mencegah default action dari tautan
    const dropdown = elem.nextElementSibling; // Mengambil elemen dropdown berikutnya
    const isVisible = dropdown.style.display == 'block'; // Memeriksa apakah dropdown sudah terlihat

    // debugger;
    console.log('isVisible', isVisible);
    console.log('display', dropdown.style.display);

    // Menyembunyikan semua dropdown lain jika ingin hanya satu yang terbuka
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(dd => {
        dd.style.display = 'none'; // Sembunyikan semua dropdown
    });

    // Tampilkan atau sembunyikan dropdown yang diklik
    dropdown.style.display = isVisible ? 'none' : 'block';
}

// Menyembunyikan dropdown saat klik di luar
window.onclick = function(event) {
    console.log('Matches', event.target.matches('.dropdown-toggle'));
    console.log(event.target);
    if (
        !event.target.matches('.dropdown-toggle') &&
        !event.target.matches('.dropdown-toggle *')
    ) {
    // if (!event.target.classList.contains('dropdown-toggle')) {
        const allDropdowns = document.querySelectorAll('.dropdown');
        allDropdowns.forEach(dd => {
            dd.style.display = 'none'; // Sembunyikan semua dropdown
        });
    }
};

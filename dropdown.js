function toggleDropdown(event) {
    event.preventDefault(); // Mencegah default action dari tautan
    const dropdown = event.target.nextElementSibling; // Mengambil elemen dropdown berikutnya
    const isVisible = dropdown.style.display === 'block'; // Memeriksa apakah dropdown sudah terlihat

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
    if (!event.target.matches('.dropdown-toggle')) {
        const allDropdowns = document.querySelectorAll('.dropdown');
        allDropdowns.forEach(dd => {
            dd.style.display = 'none'; // Sembunyikan semua dropdown
        });
    }
};

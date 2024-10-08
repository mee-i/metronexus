const sleep = d => new Promise(r => setTimeout(r, d));
const ANIMATION_DURATION = 300;

async function hideAllDropdowns(exceptionDropdowns) {
    const allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(async dd => {
        if (dd == exceptionDropdowns) return;
        dd.classList.remove('show');
        dd.classList.add('hide');
        await sleep(ANIMATION_DURATION);
        dd.style.display = 'none'; // Sembunyikan semua dropdown
    });
    await sleep(ANIMATION_DURATION);
}

async function toggleDropdown(event, elem) {
    console.log(event);
    console.log('Target: ', elem);
    console.log('next', elem.nextElementSibling);
    event.preventDefault(); // Mencegah default action dari tautan
    const dropdown = elem.nextElementSibling; // Mengambil elemen dropdown berikutnya
    const isVisible = dropdown.style.display === 'block';
    // const isVisible = dropdown.classList.contains('show'); // Memeriksa apakah dropdown sudah terlihat

    // debugger;
    console.log('isVisible', isVisible);
    console.log('display', dropdown.style.display);

    // Menyembunyikan semua dropdown lain jika ingin hanya satu yang terbuka
    hideAllDropdowns(dropdown);

    // Tampilkan atau sembunyikan dropdown yang diklik
    // dropdown.style.display = isVisible ? 'none' : 'block';
    if (isVisible) {
        dropdown.classList.remove('show');
        dropdown.classList.add('hide');
        await sleep(ANIMATION_DURATION);
        dropdown.style.display = 'none';
    }
    else {
        // await sleep(10);
        dropdown.classList.remove('hide');
        dropdown.classList.add('show');
        dropdown.style.display = 'block';
    }
}

// Menyembunyikan dropdown saat klik di luar
window.onclick = function(event) {
    console.log('Matches', event.target.matches('.dropdown-toggle'));
    console.log(event.target);
    // if (!event.target.classList.contains('dropdown-toggle')) {
    if (
        !(event.target.matches('.dropdown-toggle') ||
        event.target.matches('.dropdown-toggle *'))
    ) {
        hideAllDropdowns();
    }
};

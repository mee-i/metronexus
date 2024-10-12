function openTab(tabId) {
    var tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(function(tab) {
        if (tab.id === tabId) {
            tab.style.display = "block"; // Tampilkan tab yang dipilih
        } else {
            tab.style.display = "none"; // Sembunyikan tab lainnya
        }
    });
}

// Contoh penggunaan, hubungkan ini dengan onclick pada tombol di navbar Anda
document.querySelector('a[href="javascript:void(0);"]').onclick = function() {
    openTab('saran-masukan');
};

document.querySelector('a[href="javascript:void(0);"]').onclick = function() {
    openTab('komunitas');
};

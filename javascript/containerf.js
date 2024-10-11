 // Mendapatkan elemen modal
//  var modal = document.getElementById("detail-1");

//  // Mendapatkan tombol yang membuka modal
//  var btn = document.getElementById("opendetailBtn-1");

//  // Mendapatkan elemen <span> yang menutup modal
//  var span = document.getElementsByClassName("close")[0];

//  // Ketika tombol diklik, tampilkan modal
//  btn.onclick = function() {
//      modal.style.display = "block";
//  }

//  // Ketika tombol close diklik, sembunyikan modal
//  span.onclick = function() {
//      modal.style.display = "none";
//  }

//  // Ketika pengguna mengklik di luar modal, sembunyikan modal
//  window.onclick = function(event) {
//      if (event.target == modal) {
//          modal.style.display = "none";
//      }
//  }

 // Mendapatkan elemen modal
var modals = [
    document.getElementById("detail-1"),
    document.getElementById("detail-2"),
    document.getElementById("detail-3")
];

// Mendapatkan tombol yang membuka modal
var buttons = [
    document.getElementById("opendetailBtn-1"),
    document.getElementById("opendetailBtn-2"),
    document.getElementById("opendetailBtn-3")
];

// Mendapatkan elemen <span> yang menutup modal
var spans = document.getElementsByClassName("close");

// Ketika tombol diklik, tampilkan modal yang sesuai
buttons.forEach(function(btn, index) {
    btn.onclick = function() {
        modals[index].style.display = "flex"; // Ubah menjadi flex untuk memusatkan konten
    }
});

// Ketika tombol close diklik, sembunyikan modal
Array.from(spans).forEach(function(span, index) {
    span.onclick = function() {
        modals[index].style.display = "none";
    }
});

// Ketika pengguna mengklik di luar modal, sembunyikan modal
window.onclick = function(event) {
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

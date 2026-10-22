var tombolBuka = document.getElementById("tombol-buka");
var cover = document.getElementById("cover");
var isi = document.getElementById("isi");

tombolBuka.onclick = function () {
  cover.classList.add("d-none");         
  isi.classList.remove("d-none");      
  window.scrollTo(0, 0);
};

var tanggalAcara = new Date(2026, 11, 20, 8, 0, 0);

function hitungMundur() {
  var sekarang = new Date();
  var selisih = tanggalAcara - sekarang;

  if (selisih < 0) {
    selisih = 0;
  }

  var hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  var jam = Math.floor((selisih / (1000 * 60 * 60)) % 24);
  var menit = Math.floor((selisih / (1000 * 60)) % 60);
  var detik = Math.floor((selisih / 1000) % 60);

  document.getElementById("hari").innerHTML = hari;
  document.getElementById("jam").innerHTML = jam;
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("detik").innerHTML = detik;
}

hitungMundur();                    
setInterval(hitungMundur, 1000);   

var tombolKirim = document.getElementById("tombol-kirim");
var daftarUcapan = document.getElementById("daftar-ucapan");

tombolKirim.onclick = function () {
  var nama = document.getElementById("nama").value;
  var pesan = document.getElementById("pesan").value;

  if (nama === "" || pesan === "") {
    alert("Nama dan ucapan harus diisi ya!");
    return;
  }

  var kotak = document.createElement("div");
  kotak.className = "ucapan";
  kotak.innerHTML = "<b></b><p></p>";
  kotak.querySelector("b").textContent = nama;
  kotak.querySelector("p").textContent = pesan;

  daftarUcapan.prepend(kotak);

  document.getElementById("nama").value = "";
  document.getElementById("pesan").value = "";
};
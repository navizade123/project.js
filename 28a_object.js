//Penilaian siswa 
const p = document.querySelector(".data")
let NilaiSiswa = {
    nama: 'Amir Mahmud',
    Kejuruan: 'RPL',
    alamat: 'Pamulang',
}

document.write('NIP        :' + NilaiSiswa.nama);
document.write("<br>")
document.write('Nama       :' + NilaiSiswa.Kejuruan);
document.write("<br>")
document.write('Alamat     :' + NilaiSiswa.alamat);
document.write("<br>")

let nilai = "A";
let predikat = ""

if (nilai == "100") {
    predikat = "SANGAT KOMPETEN"
} else if (nilai = "90") {
    predikat = "KOMEPTEN"
} else if (nilai = "80") {
    predikat = "CUKUP KOMPETEN"
} else if (nilai = "70") {
    predikat = "YOU LOSE"
} else {
    predikat = "ANDA TIDAK LULUS"
}

document.write(`Nilai anda ${nilai},dengan predikat ${predikat}`);
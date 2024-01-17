let pegawai = {
    nip: "456",
    nama: "Budi Mahmud",
    alamat: {
      jalan: "jl.Ayam No.3",
      kelurahan: "meruya Ilir",
      kecamatan: "Kebon Jeruk",
      kota: "Jakarta Barat",
    },
  };
  
  function TotalGaji(jamkerja, gajiperjam) {
    let GajiPokok = jamkerja * gajiperjam;
    console.log("Gaji anda: " + GajiPokok);
  }
  

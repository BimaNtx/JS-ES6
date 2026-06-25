const nama = "Bima";
const umur = 17;

console.log(`Halo nama saya ${nama} dan saya berumur ${umur} tahun`);

const a = 20;
const b = 30;

console.log(`Hasilnya adalah ${a + b}`);

const produk = {
  nama: "Laptop",
  harga: 500000
};

console.log(`${produk.nama} - Rp${produk.harga}`)

const teks = `
baris 1
baris 2
`;
console.log(teks);
// 
const siswa = [
  {
    nama: "Andi",
    nilai: 90
  },
  {
    nama: "Budi",
    nilai: 80
  }
];
const hasil = siswa.map(s => `${s.nama} - ${s.nilai}`);
console.log(hasil);
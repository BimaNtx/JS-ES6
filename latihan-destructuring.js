// Array
num = [1, "Jeruk", 3, 4];
const [first, second, ...sisa] = num;
console.log(second);

const framework = ["React", "Vue", "Svelte"];
const [satu, dua, tiga] = framework;
console.log(satu); 
console.log(dua);  

const warna = ["Merah", "Kuning", "Hijau"];
const [, , warnaKetiga] = warna;
console.log(warnaKetiga);

// Object
const person = {
  nama: "Bima",
  umur: 17,
  status: "Pelajar"
}

const {nama, umur, status:mahasiswa} = person;
console.log(mahasiswa);
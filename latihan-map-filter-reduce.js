const numbers = [1, 2, 3, 4, 5];

// map()
const doublenumber = numbers.map((num) => num * 2);
console.log(doublenumber);

// filter()
const genap = numbers.filter((num) => num % 2 === 0);
console.log(genap);

// reduce()
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

// latihan
// const tugasMagang = [
//   { id: 1, tugas: "Slicing UI Navbar", status: "selesai" },
//   { id: 2, tugas: "Membuat Form Login", status: "pending" },
//   { id: 3, tugas: "Integrasi API", status: "pending" },
//   { id: 4, tugas: "Setup Tailwind CSS", status: "selesai" }
// ];

// const belumSelesai = tugasMagang
//   .filter((tugas) => tugas.status === "pending")
//   .map((tugas) => tugas.tugas);

// console.log(belumSelesai)

// const siswa = [
//   { nama: "Bima", umur: 17},
//   { nama: "Dun", umur:18}
// ];

// const dewasa = siswa
//   .filter((siswa) => siswa.umur >= 18)
//   .map((siswa) => siswa.nama)
// console.log(dewasa);

// belajar #2
const tugasMagang = [
  {
    tugas: "Belajar JS",
    status: "pending"
  },
  {
    tugas: "Belajar React",
    status: "selesai"
  },
  {
    tugas: "Belajar Git",
    status: "pending"
  }
];

const tugasPending = tugasMagang.filter((tugas) => tugas.status === "pending");
console.log(tugasPending);

const namaTugas = tugasMagang.map((tugas) => tugas.tugas);
console.log(namaTugas);

const belumSelesai = tugasMagang
  .filter((tugas) => tugas.status === "pending")
  .map((tugaas) => tugaas.tugas);
console.log(belumSelesai);

// next
const siswa = [
  {
    nama: "Andi",
    nilai: 90
  },
  {
    nama: "Budi",
    nilai: 70
  },
  {
    nama: "Joko",
    nilai: 85
  }
];

const siswaLulus = siswa
  .filter((siswa) => siswa.nilai >= 80)
  .map((siswa) => siswa.nama);
console.log(siswaLulus);


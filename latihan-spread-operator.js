// Spread Operator pada array 
const buah = ["Apel", "Jeruk", "Mangga"];
const buah2 = [...buah];
console.log(buah2);

const frontend = ["HTML", "CSS", "JS" ];
const backend = ["PHP", "MySQL"];
const fullstack = [...frontend, ...backend];
console.log(fullstack);

// Menambah item baru
const game = ["Genshin", "Valorant"];
const updateGame = [...game, "COC"]; //menambah di belakang
const updateGamedepan = ["COC", ...game]; //menambah di depan
console.log(updateGame, updateGamedepan);

// Spread Operator pada Object 
const user = {nama: "Bima", umur: 17};
const alamat = {kota: "Lumajang"};

const profilLengkap = {...user, ...alamat};
console.log(profilLengkap);

// update properti object
const dataKaryawan = {nama: "Budi", divisi: "Marketing"};
// budi pindah divisi web dev
const updateKaryawan = {...dataKaryawan, divisi: "Web Dev"};
console.log(updateKaryawan);

// latihan
// --- KASUS 1: ARRAY ---
const pengeluaranBulanLalu = ["Makan Siang", "Bensin"];
const pengeluaranHariIni = "Beli Kopi";

// Misi 1: Gabungkan pengeluaranBulanLalu dengan pengeluaranHariIni 
// menggunakan Spread Operator agar menjadi array baru.
const semuaPengeluaran = [...pengeluaranBulanLalu, pengeluaranHariIni]

console.log(semuaPengeluaran); 
// Target Output 1: [ 'Makan Siang', 'Bensin', 'Beli Kopi' ]

// --- KASUS 2: OBJECT ---
const profilAkun = { 
  username: "bima_dev", 
  saldo: 50000, 
  status: "basic" 
};

// Misi 2: Bima baru saja melakukan upgrade akun.
// Buat object baru dengan meng-copy 'profilAkun', lalu ubah nilai 
// 'status' menjadi "premium" dan 'saldo' menjadi 150000.
const akunPremium = {...profilAkun, saldo: 150000, status: "premium"}

console.log(akunPremium);
// Target Output 2: { username: 'bima_dev', saldo: 150000, status: 'premium' }
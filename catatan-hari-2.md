# Rangkuman: Arrow Function (ES6)

Arrow Function adalah cara penulisan fungsi yang lebih singkat, modern, dan menjadi standar utama dalam pengembangan React JS.
---

## 1. Perbandingan Sintaks Dasar
**Function Biasa (ES5):**
```javascript
function luas(sisi) {
  return sisi * sisi;
}

**Arrow Function (ES6):**
````javascript
const luas = (sisi) => {
  return sisi * sisi;
};

## 2. Aturan Parameter
- 0 Parameter: Wajib menggunakan kurung kosong (). (Contoh: const angka = () => 10;)
- 1 Parameter: Kurung opsional/bisa dihilangkan. (Contoh: const sapa = nama => "Halo " + nama;)
- 2 atau Lebih Parameter: Wajib menggunakan kurung (). (Contoh: const tambah = (a, b) => a + b;)

## 3. Aturan Return (Pengembalian Nilai)
- Dengan Kurung Kurawal {}: Wajib menuliskan kata kunci return.
- Tanpa Kurung Kurawal (Implicit Return): Tidak perlu menulis return. Sangat cocok untuk fungsi yang hanya berisi satu baris ekspresi. (Contoh: const kali = (a, b) => a * b;)

## 4. Konsep Penting (Function vs Data)
- Menyimpan Instruksi: Function menyimpan blok instruksi yang siap dijalankan, bukan menyimpan hasil langsung.
- Pemanggilan: Instruksi tersebut baru akan berjalan dan menghasilkan output ketika dipanggil menggunakan tanda kurung, misalnya sapa("Budi").
- Perbandingan Tipe Data: const nama = "Budi" bertipe String, sedangkan const nama = () => "Budi" bertipe Function.
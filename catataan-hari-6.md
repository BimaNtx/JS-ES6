# Rangkuman: Asynchronous, Fetch API, dan Try...Catch

Asynchronous adalah teknik agar JavaScript tidak "macet" atau berhenti bekerja saat sedang menunggu proses yang butuh waktu lama (seperti mengambil data dari internet).

---

## 1. Async / Await (Cara Modern Menangani Promise)
* **`async`**: Kata kunci penanda bahwa di dalam fungsi ini ada proses yang butuh waktu. Wajib ditaruh di depan fungsi.
* **`await`**: Perintah agar JavaScript **menunggu** di baris tersebut sampai prosesnya selesai, baru boleh lanjut ke baris bawahnya.

```javascript
const ambilData = async () => {
  // JavaScript akan sabar menunggu di sini
  const response = await fetch("[https://api.com/data](https://api.com/data)"); 
};


## 2. Fetch API (Kurir Pengambil Data)
fetch adalah fungsi bawaan JavaScript untuk meminta data dari server (API).
Wajib melewati 2 tahap:
1. Mengambil paket mentah (fetch).
2. Membuka paket mentahnya menjadi format Object JavaScript (.json()).

const response = await fetch("[https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1)");
const data = await response.json(); // Mengubah JSON menjadi Object```


##3. Try...Catch (Jaring Pengaman Error)
Digunakan untuk menangani error agar aplikasi tidak crash/blank saat proses pengambilan data gagal (misal: API mati atau internet putus).
1. try: Blok kode utama yang akan dicoba untuk dijalankan.
2. catch: Blok kode yang otomatis berjalan hanya jika ada baris di dalam try yang gagal/error.

const tampilkanData = async () => {
  try {
    const response = await fetch("[https://api.benar.com/users](https://api.benar.com/users)");
    const data = await response.json();
    console.log(data); // Berjalan jika sukses
  } catch (error) {
    console.log("Terjadi kesalahan: ", error.message); // Berjalan jika gagal
  }
};
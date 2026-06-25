const ambilDataUser = async () => {
  try {
    console.log("1. Sedang meminta data ke server...");

    // KITA SENGAJA MERUSAK URL-NYA (tambah huruf 'x' di belakang 'users')
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    
    // Mengecek apakah kurir kembali tapi membawa laporan "Alamat Palsu" (Error 404)
    if (!response.ok) {
      throw new Error(`Waduh, alamat API salah! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("2. Data berhasil didapatkan!");
    console.log(`Nama : ${data.name}`);

  } catch (error) {
    // Jika ada error di dalam kotak 'try', kodenya akan langsung melompat ke sini
    console.log("❌ GAGAL MENGAMBIL DATA:");
    console.log(error.message);
  }
};

ambilDataUser();

// Latihan
const ambilTugasSelesai = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1/todos");
    const todos = await response.json();

    console.log("✅ DAFTAR TUGAS YANG SUDAH SELESAI:\n");
    // todos adalah Array of Objects. Tiap object punya properti: id, title, dan completed.
    todos
      // 2. Filter hanya tugas yang properti 'completed' bernilai true
      .filter((tugas) => tugas.completed === true)
      
      // 3. Langsung sambung (chaining) dengan map
      .map((tugasSelesai, index) => {
        // 4. Lakukan destructuring untuk mengambil properti 'title' saja
        const { title } = tugasSelesai;

        // 5. Tampilkan menggunakan Template Literal
        console.log(`${index + 1}. ${ title }`);
      });

  } catch (error) {
    console.log("Terjadi masalah:", error.message);
  }
};

ambilTugasSelesai();
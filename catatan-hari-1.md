## ES6: ECMAScript version 6
atau versi baru dari JavaScript(2015)
- ES6 dibuat untuk mengatasi keterbatasan versi JS yang lama dan juga untuk kebutuhan pengembangan yang leih modern, lebih rapi dan efisien.
- React JS banyak menggunakan ES6 karena sintaks modernnya membuat kode jadi lebih bersih , mudah dikelola dan modular 

## EP 2 (Array dan Object)
- const buah = ["apel", "jeruk", "mangga"];
Array digunakan untuk menyimpan kumpulan data dalam satu variable 

-const user = {
    nama: "Budi",
    umur: 18
};
Object digunakan untuk menyimpa sebuah Key dan Value/ data yang memiliki atribut/properti

## Array dan Object dapat digabung
Namun tidak bisa langsung dikirim ke sistem lain, harus di *serialization*(Mengubah object menjadi JSON(Javascript Object Notation)), lalu disimpan di database dan di kirim melalui API dalam bentuk JSON untuk ditampilkan di browser

<!-- ---------------------------------------------------------------------- -->

## EP 3 (Let dan Const)
- let digunakan untuk mendeklarasikan sebuah varialble dan nilainya dapat berubah
- conts juga untuk mendeklarasikan variable namun nilainya tetap

Perbedaan var dan let yaitu:
var(fanction scope)
let(block scope)
const(block scope)
- Pada const tidak dapat mengubah nilai didalam array namun bisa menambah nilai menggunakan *.push()*
## EPS 8 Template Literal

Adalah cara memanipulasi *string* (teks) menggunakan backticks(``) 

### A. Menggabungkan teks dan Variabel (String interpolation)
kita bisa langsung menyisipkan variabel ke dalam teks menggunakan sintaks `${variabel}`.

<!-- Cara lama es5 -->
```javascript
const framework = "React";
const kalimat = "Saya seedang belajar " + framework;
```

// ES6
```javascript
const framework = "React";
const kalimat = `Saya sedang belajaar ${framework};
```

<!-- Multi line -->
```javascript
const obrolan = `Hari ini aku belajar,
Besok aku masih belajar,
dan Lusa aku tetap belajar.`;
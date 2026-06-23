<!-- EPS 7 -->
##<!-- Destructuring (ES6)
Destructuring adalah sintaks yang memungkinkan kita  untuk membongkar nilai nilai dari *Array* atau properti dari *object*, lalu mentimpannya langsung di variabel yang berbeda dengan cara yang lebih ringkas
 -->

## 1. Destructuring Object 
Cara lama mengambil data dari object cukup berulang, dengan Destructuring cukup memanggil nama propertinay di dalam *{}*

**Cara lama**
```javascript
const user = {nama: "Bima", role: "Frontend};
const namaUser = user.nama;
const roleUser = user.role;
```

**Cara Modern**
```javascript
const user = { nama: "Bima", role: "Frontend"};
const {nama, role} = user;
console.log(nama)
console.log(role)
```

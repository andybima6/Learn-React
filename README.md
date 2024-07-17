0.  Installasi React

    1. Menjalankan perintah dengan template vite

    ```javaScript
    npm create vite@latest
    ```

    2. membarikaaan nama Project seperti :

    React-Learn

    3. MMmemilih Framework React lalu Variant JavaScript

    4. kemudian pindah ke file atau folder yang telah dibuat lalu menjalankan perintah :
       ```javaScript
       npm install
       npm run dev
       ```

1.  Ajax

- ekstensi javascript didalam react.memungkin menulis html didalam javaScript, kita juga bisa menyisipkan kode JavaScript ke dalam JSX dengan menambahkan kurung kurawal {}.

Contoh :

```javaScript
const App = () => {
  let nama = 'Terra'

  return (
    <div>
      <h1>Hello, World!</h1>;
      <h2>Selamat Datang {nama}</h2>
    </div>
  )
} 
```

Aturan Penggunaan JSX :
a. Satu element yang di-return
```javaScript

<div>
  {/* beberapa element di dalam */}
</div>

```

b. Semua tag harus ditutup
```javaScript
<>
<p></p>
<img />
<br />
</>
```

c. Penggunaan camelCase
```javaScript
<img
src=""
className="" //camelCase
onClick={} // camelCase
/>
```

- Catatan:

Perlu diperhatikan bahwa JSX akan di-return untuk dapat ditampilkan.


## 02. Rendering Conditional & Loop
 menggunakan perintah conditional, seperti: if else dan switch yang diberi return.

 ```javaScript
 function App() {
  let isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

bisa menggunakan ternary operator, jika ingin menyisipkan conditional kedalam JSX seperti ini.
```javaScript
function App() {
  let isLoggedIn = true

  return (
    {isLoggedIn ?
      <h1>Welcome back!</h1> 
      : 
      <h1>Please log in.</h1>;
    }
  )
}
```
  Catatan:

Ternary operator lebih sering digunakan untuk melakukan pengondisian pada JSX

Loop
Loop rendering bisa kita lakukan dengan menggunakan map(). Perlu diingat bahwa, map() hanya dapat digunakan untuk data array.
```javaScript
function App() {
  let listBuah = ["jeruk", "rambutan", "pepaya"]

  return (
    <ul>
      {listBuah.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```
Penjelasan dari kode di atas, antara lain:

listBuah di-loop menggunakan map().
map() diisi dengan callback function yang mengembalikan element <li>.
Atribute/Props key pada <li> digunakan sebagai pembeda antara <li> buah yang satu dengan yang lain. Biasanya diisi dengan id dari sebuah item.
Maka jeruk, rambutan, dan pepaya akan muncul dengan tampilan list.

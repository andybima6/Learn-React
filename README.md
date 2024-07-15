0.  Installasi React

    1. Menjalankan perintah dengan template vite

    """
    npm create vite@latest
    """

    2. membarikaaan nama Project seperti :

    React-Learn

    3. MMmemilih Framework React lalu Variant JavaScript

    4. kemudian pindah ke file atau folder yang telah dibuat lalu menjalankan perintah :
       """
       npm install
       npm run dev
       """

1.  Ajax

- ekstensi javascript didalam react.memungkin menulis html didalam javaScript, kita juga bisa menyisipkan kode JavaScript ke dalam JSX dengan menambahkan kurung kurawal {}.

Contoh :

"""
const App = () => {
  let nama = 'Terra'

  return (
    <div>
      <h1>Hello, World!</h1>;
      <h2>Selamat Datang {nama}</h2>
    </div>
  )
} 
"""

Aturan Penggunaan JSX :
a. Satu element yang di-return
"""

<div>
  {/* beberapa element di dalam */}
</div>

"""

b. Semua tag harus ditutup
"""
<>
<p></p>
<img />
<br />
</>
"""

c. Penggunaan camelCase
"""
<img
src=""
className="" //camelCase
onClick={} // camelCase
/>
"""

- Catatan:

Perlu diperhatikan bahwa JSX akan di-return untuk dapat ditampilkan.

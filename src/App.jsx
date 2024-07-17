// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// 03-Functional-Component

import Footer from './components/Footer';

function App() {
  return (
    <div>
      <h1>Halo Semua!</h1>
      <p>Selamat Datang di aplikasi React Pertamaku</p>

      <Footer />
    </div>
  );
}

export default App;

// Class Component,Selain pembuatan component menggunakan bentuk function, ada juga pembuatan komponen menggunakan class (Class Component)
// class App extends React.Component {
//   render() {
//     return (
//       <h1>Halo Semua!</h1>
//       <p>Selamat Datang</p>
//     );
//   }
// }

// export default App
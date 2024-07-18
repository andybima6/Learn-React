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

// import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//       <h1>Halo Semua!</h1>
//       <p>Selamat Datang di aplikasi React Pertamaku</p>

//       <Footer />
//     </div>
//   );
// }

// export default App;

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

// 04-Styling
// function App() {
//   return (
//     <div>
//       <p
//         style={{
//           color: "blue",
//           fontSize: "16px",
//           backgroundColor: "lightgray",
//         }}
//       >
//         Ini adalah teks dengan inline style.
//       </p>
//     </div>
//   );
// }

// export default App

// Contoh 2
// function App() {
//   const styles = {
//     color: "blue",
//     fontSize: "16px",
//     backgroundColor: "lightgray",
//   };

//   return (
//     <div>
//       <p style={styles}>Ini adalah teks dengan inline style.</p>
//     </div>
//   );
// }
// export default App

// 05 Props Data
// // Contoh 1
// import Card from './Card'
// function App(){
//   return (
//     <>
//       <Card img="html.png" name="HTML Dasar" />
//       <Card img="css.png" name="CSS Dasar" />
//       <Card img="javascript.png" name="javascript" />
//     </>
//   )
// }

// export default App;

// import Card from './Card'
// function App(){
//   return (
//     <>
//       <Card img="html.png" name="HTML Dasar" />
//       <Card img="css.png" name="CSS Dasar" />
//       <Card img="javascript.png" name="javascript" />
//     </>
//   )
// }

// export default App;



// Contoh 2
// import './Buah.css'
// import './CardBuah.jsx'
// function App(){
//   let listBuah = ["Semangka","Jambu","Mangga","Rambutan"]

//   return (
//     <ul>
//       {listBuah.map((item,index)=>(
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   )
// }
// export default App;

// Props Children
// import PageLayout from './PageLayout';
// import Home from './Home';

// function App() {
//   return (
//     <PageLayout>
//       <Home />
//     </PageLayout>
//   );
// }

// export default App;

// Latihan
import CardContainer from './CardContainer';


function App() {
  return (
    <div>
      <CardContainer>
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </CardContainer>

      <CardContainer>
        <p>This is a paragraph inside a CardContainer. It demonstrates how to use the CardContainer component to wrap different types of content.</p>
      </CardContainer>
    </div>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Scores } from './pages/Scores';

import './styles/global.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/scores' element={<Scores />} />
      </Routes>
    </BrowserRouter>
  );
}

// import { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';

// import { Header } from './components/Header';
// import { Footer } from './components/Footer';
// import { Picture } from './components/Picture';

// import './styles/global.css';

// import { db } from './config/firebase';

// export function App() {
//   const [scores, setScores] = useState([]);
//   const scoresCollectionRef = collection(db, 'scores');

//   useEffect(() => {
//     async function getScores() {
//       const result = await getDocs(scoresCollectionRef);
//       //console.log(result.docs.map(doc => ({ ...doc.data() })));
//     }

//     getScores();

//   }, []);


//   return (
//     <>
//       <Header />
//       <main id='app'>
//         <Picture />
//       </main>
//       <Footer />
//     </>
//   );
// }
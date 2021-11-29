import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Picture } from './components/Picture';

import './styles/global.css';
import './styles/app.css';

import { db } from './config/firebase';

export function App() {
  const [scores, setScores] = useState([]);
  const scoresCollectionRef = collection(db, 'scores');

  useEffect(() => {
    async function getScores() {
      const result = await getDocs(scoresCollectionRef);
      console.log(result.docs.map(doc => ({ ...doc.data() })));
    }

    getScores();

  }, []);


  return (
    <>
      <Header />
      <main id='app'>
        <Picture />
      </main>
      <Footer />
    </>
  );
}
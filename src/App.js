import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Picture } from './components/Picture';

import './styles/global.css';
import './styles/app.css';

export function App() {
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
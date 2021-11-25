import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/global.css';
import './styles/app.css';

export function App() {
  return (
    <>
      <Header />
      <main id='app'>
        <h2>Hello, world!</h2>
      </main>
      <Footer />
    </>
  );
}
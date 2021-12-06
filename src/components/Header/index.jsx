import { Link } from 'react-router-dom';

import './styles.css';

export function Header() {
  return (
    <header id='main-header'>
      <h1><Link to='/'>Where's Waldo?</Link></h1>
      <nav id='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/game'>Game</Link>
        <Link to='/scores'>Scores</Link>
      </nav>
    </header>
  );
}
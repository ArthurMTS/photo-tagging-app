import { useState } from 'react';

import { MenuBox } from '../MenuBox';

import gameImage from '../../assets/where-s-waldo.jpg';

import './styles.css';

export function GameScreen() {
  const [show, setShow] = useState(false);
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);
  
  function handleClick(event) {
    const { clientX, clientY } = event;

    setShow(!show);
    setScreenX(clientX);
    setScreenY(clientY);
  }

  return (
    <>
      <img
        id='picture'
        src={gameImage}
        alt='game screen'
        onClick={handleClick}
      />
      <MenuBox
        show={show}
        screenX={screenX}
        screenY={screenY}
      />
    </>
  );
}
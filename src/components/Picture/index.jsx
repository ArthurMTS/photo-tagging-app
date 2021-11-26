import { useState } from 'react';

import { Box } from '../Box';

import gameImage from '../../assets/where-s-waldo.jpg';

import './styles.css';

export function Picture() {
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
      <Box
        show={show}
        screenX={screenX}
        screenY={screenY}
      />
    </>
  );
}
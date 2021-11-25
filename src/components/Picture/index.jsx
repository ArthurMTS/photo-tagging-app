import { Box } from '../Box';

import './styles.css';

export function Picture() {
  
  function handleClick(event) {
    const { screenX, screenY } = event;

    console.log(screenX, screenY);
    // render box
  }

  return (
    <>
      <img
        id='picture'
        src='https://i.redd.it/p9ye06summm51.jpg'
        alt='game screen'
        onClick={handleClick}
      />
      <Box />
    </>
  );
}
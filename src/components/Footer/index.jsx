import github from '../../assets/github.svg';

import './styles.css';

export function Footer() {
  return (
    <footer id='main-footer'>
      <p>Created by 
        <a
          href='https://github.com/ArthurMTS/'
          target='_blank'
          rel='noreferrer'
        >ArthurMTS</a>
      </p>
      <a
        href='https://github.com/ArthurMTS/photo-tagging-app'
        target='_blank'
        rel='noreferrer'
      >
        <img src={github} alt='github icon' />
      </a>
    </footer>
  );
}
import './styles.css';

export function Box({ show, screenX, screenY }) {

  return (
    <div
      id='box'
      style={{
        display: show ? 'block' : 'none',
        top: screenY,
        left: screenX
      }}
    >
      <ul>
        <li>Waldo</li>
        <li>Wizard</li>
        <li>Outlaw</li>
      </ul>
    </div>
  );
}
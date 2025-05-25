import reactLogo from '../assets/react.svg';
import './Header.css';

function Header() {
  const titulo ="ARTLIST";
  return (
    <header className="header-container">
      <img src={reactLogo} className="react-logo" alt="React logo" />
      <h2 className="header-title">{titulo}</h2>
    </header>
  );
}

export default Header;
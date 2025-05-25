
import './MenuBar.css';

function MenuBar(){
  return (
    <nav className="menu-bar">
      <ul className="menu-options">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default MenuBar;
import "./NavBar.css";
import { Search, UserRound, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Áurea</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="contacto">Contacto</Link>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <span className="sr-only">Buscar</span>
            <Search />
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only">Perfil</span>
            <UserRound />
          </a>
        </li>
        <li>
          <a href="#">
            <span className="sr-only">Carrito de compras</span>
            <ShoppingBag />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

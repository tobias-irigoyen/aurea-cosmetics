import { useState } from "react";
import "./NavBar.css";
import { Search, UserRound, ShoppingBag, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const NavBar = () => {
  const { items } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Áurea
      </Link>

      <div className="navbar-actions">
        <a href="#" className="desktop-action" aria-label="Buscar">
          <Search />
        </a>
        <a href="#" className="desktop-action" aria-label="Perfil">
          <UserRound />
        </a>
        <Link to="/carrito-de-compras" className="shopping-bag">
          <ShoppingBag />
          <span>({cartQuantity})</span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="navbar-links is-open">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li className="mobile-extra">
            <a href="#"><Search size={20} /> Buscar</a>
          </li>
          <li className="mobile-extra">
            <a href="#"><UserRound size={20} /> Perfil</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;

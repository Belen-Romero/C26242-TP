import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            Carrito
            {totalItems > 0 && <span className="incart">{getTotalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

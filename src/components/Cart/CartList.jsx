import { useCart } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const { cart } = useCart();

  return (
    <div className="cart-items-container">
      {cart.map((element) => (
        <CartItem item={element} key={element.id} />
      ))}
    </div>
  );
};

import { useContext } from "react";

import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.mealName}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{props.price.toFixed(2)}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

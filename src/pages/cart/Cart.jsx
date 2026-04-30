import React, { useEffect } from "react";
import { useProduct } from "../../context/MainContext";
import styles from "./Cart.module.scss";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { readOrder, deleteOrder, order, changeCount, addCheck } = useProduct();

  useEffect(() => {
    readOrder();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Cart</h2>

      {order.map((item) => (
        <div className={styles.card} key={item._id}>
          <img src={item.item.img} alt="" />

          <div className={styles.info}>
            <h3>{item.item.name}</h3>
            <p>{item.item.price * item.count || item.item.price} сом</p>

            <div className={styles.counter}>
              <button onClick={() => changeCount(item._id, "dec")}>-</button>
              <span>{item.count || 1}</span>
              <button onClick={() => changeCount(item._id, "inc")}>+</button>
            </div>

            <button
              className={styles.delete}
              onClick={() => deleteOrder(item._id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
      <div>
        <NavLink to="/check">
          <button onClick={() => addCheck(order)}>add to check</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;

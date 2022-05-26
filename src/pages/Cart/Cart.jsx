// import style from './Home.module.scss'
import styles from "./Cart.module.css";
import deleteIcon from "../../assets/images/delete.svg";
import incressedIcon from "../../assets/images/incresseIcon.svg";
import decrementIcon from "../../assets/images/decrementIcon.svg";
import { useContext, useEffect, useState } from "react";
import { UseCart } from "../../hooks/CartContext/useCart";
import axios from "axios";
import { calcPromo } from "../../util/calcPromo";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, handleSetTotal, total, removeProduct, handleProductIncrement, handleProductDecrement } = useContext(UseCart);
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4444/promotions/list").then((res) => {
      setPromotions(res.data);
    });
    calcCart();
  }, []);

  useEffect(() => {
    calcCart()
  }, [cart])

  function calcCart() {
    let preTotal = 0;
    cart.forEach((item) => {
      if (item.promotion_id && promotions.length) {
        let promotion = promotions.find((element) => {
          return element.id == item.promotion_id;
        });
        console.log(promotion);

        preTotal += calcPromo(
          item.price,
          item.quantity,
          {compre:promotion.compre,
            pague:promotion.pague, type: promotion.type}
        );
      } else {
        preTotal += item.quantity * item.price;
      }
    });
    handleSetTotal(preTotal);
  }

  const formatValue = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styles.cartContainer}>
      <div className={styles.productTable}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th>Promoção</th>
            <th src={deleteIcon} />
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr  className={styles.tdBoxs} key={item.id}>
              <td>
                <strong>{item.name}</strong>
                <span>{formatValue.format(item.price)}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    className={styles.decrementIcon}
                    onClick={() => handleProductDecrement(item)}
                  >
                    <img src={decrementIcon} alt="" />
                  </button>
                  <input type="number" value={item.quantity} />
                  <button 
                  type="button" 
                  className={styles.decrementIcon}
                  onClick={() => handleProductIncrement(item)}
                  >
                    <img src={incressedIcon}alt="" />
                  </button>
                </div>
              </td>
              <td className={styles.subTotalStyle}>
                <strong>{formatValue.format(item.price)}</strong>
              </td>
              {promotions.map((promotion) => {
                if (promotion.id === item.promotion_id) {
                  return (
                    <td>
                      <strong className={styles.promotionBox}>
                        <p>{promotion.name}</p>
                      </strong>
                    </td>
                  );
                }
              })}

              <td>
                <button
                  type="button"
                  className={styles.decrementIcon}
                  onClick={() => {
                    removeProduct(item.id);
                  }}
                >
                  <img src={deleteIcon} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </div>

      <footer>
        <Link to ="/finally">
        <button type="button">Finalizar pedido</button>
        </Link>
        <div className={styles.total}>
          <span>Total</span>
          <strong>{formatValue.format(total)}</strong>
        </div>
      </footer>
    </div>
  );
}

// import style from './Home.module.scss'
import { useContext, useEffect, useState } from "react";
import { UseCart } from "../../hooks/CartContext/useCart";
import styles from "./Home.module.css";
import axios from "axios";
// import { items } from "../../db/data";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [promotion, setPromotion] = useState([]);

  const formatValue = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    axios.get("http://localhost:4444/products/list").then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4444/promotions/list").then((res) => {
      setPromotion(res.data);
      console.log(res.data);
    });
  }, []);

  const { cart, handleAddItemCart } = useContext(UseCart);

  return (
    <div className={styles.homeContainer}>
      {products.map((item, key) => (
        <div key={key} className={styles.productCard}>
          <div className={styles.productCardText}>
            <h3 className={styles.productName}>{item.name}</h3>
            <p>{item.description}</p>
            <p className={styles.productPrice}>
              <strong>{formatValue.format(item.price)}</strong>
            </p>
          </div>
          {promotion.map((promotion) => {
            if (promotion.id === item.promotion_id) {
              return (
                <p className={styles.promoPrice}>
                  <strong>{promotion.name}</strong>
                </p>
              );
            }
          })}
          <button
            disabled={cart.find((cartItem) => item.id === cartItem.id)}
            onClick={() => handleAddItemCart(item)}
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;

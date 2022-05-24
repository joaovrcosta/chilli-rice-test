// import style from './Home.module.scss'
import { useContext, useEffect, useState } from "react";
import { UseCart } from "../../hooks/CartContext/useCart";
import styles from "./Home.module.css";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [promotion, setPromotion] = useState([]);

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
          <h3 className={styles.productName}>{item.name}</h3>
          <p>{item.description}</p>
          <p>
            Preço: <strong>{item.price}</strong>
          </p>
          {promotion.map((promotion) => {
            if (promotion.id === item.promotion_id) {
              return (
                <p>
                  Promoção <strong>{promotion.name}</strong>
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

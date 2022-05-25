import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Register.module.css";

export function Register() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [promotion_id, setPromotion_id] = useState("");
  const [promotions, setPromotions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(promotion_id.includes("NoPromotion"));

    // if (promotion_id === "NoPromotion") {
    //   setPromotion_id(null);
    //   console.log("Entrou no if")
    // }

    console.log("Depois", promotion_id);

    axios
      .post("http://localhost:4444/products", {
        name,
        description,
        price,
        promotion_id: promotion_id === "NoPromotion" ? null : promotion_id,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4444/promotions/list")
      .then((res) => {
        console.log(res.data);
        setPromotions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.registerContainer}>
      <h1>Cadastrar Produto</h1>
      <form action="#" onSubmit={handleSubmit}>
        <div className={styles.cardDetails}>
          <div className={styles.cardBox}>
            <input
              type="text"
              placeholder="Nome do produto"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.cardBox}>
            <input
              type="text"
              placeholder="Descrição de produto"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className={styles.cardBox}>
            <input
              type="number"
              placeholder="Preço do produto"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
          <div className={styles.cardBox}>
            <label htmlFor="">Selecione uma promoção</label>
            <select
              name=""
              id=""
              value={promotion_id}
              onChange={(event) => setPromotion_id(event.target.value)}
            >
              <option value="" selected disabled>Promoção:</option>
              <option value="NoPromotion">Sem promoção</option>
              {promotions.map((promotion) => (
                <option value={promotion.id}>{promotion.name}</option>
              ))}
            </select>
          </div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

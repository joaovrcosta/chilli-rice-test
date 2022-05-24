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

    if (promotion_id === "Sem promoção") {
      setPromotion_id(null);
      console.log("Entrou no if");
    }

    axios
      .post("http://localhost:4444/products", {
        name,
        description,
        price,
        promotion_id,
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
            <select
              name=""
              id=""
              value={promotion_id}
              onChange={(event) => setPromotion_id(event.target.value)}
            >
              <option value="0" selected disabled>
                Selecione uma Promoção:
              </option>
              <option value={"Sem promoção"}>Sem promoção</option>
              {/* <option value="8511a5fd-8195-4d5a-a449-342598e0d6d0">2 pelo preço de 1</option> */}
              {/* <option value="ea5d779a-5b96-490e-aaab-283408770b2e">3 pelo preço de 10</option> */}
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

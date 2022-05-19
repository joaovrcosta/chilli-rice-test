import styles from "./Register.module.css";

export function Register() {
  return (
    <div className={styles.registerContainer}>
      <h1>Cadastrar Produto</h1>
      <form action="#">
        <div className={styles.cardDetails}>
          <div className={styles.cardBox}>
          <input type="text" placeholder="Nome do produto" />
          </div>
          <div className={styles.cardBox}>
          <input type="number" placeholder="Preço do produto" />
          </div>
          <div className={styles.cardBox}>
          <select name="" id="">
            <option value="0" selected disabled>
              Selecione uma Promoção:
            </option>
            <option value="1">2 pelo preço de 1</option>
            <option value="1">3 pelo preço de 10</option>
          </select>
          </div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

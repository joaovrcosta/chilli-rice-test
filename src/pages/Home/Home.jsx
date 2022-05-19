// import style from './Home.module.scss'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* {productItems.map((productItems) => () */}
      <div className={styles.productCard}>
        <h3 class={styles.productName}>Oculos de Grau</h3>
        <p>Preço: 342</p>
        <button>Comprar</button>
      </div>

      <div className={styles.productCard}>
        <h3 class={styles.productName}>Oculos de Grau</h3>
        <p>Preço: 342</p>
        <button>Comprar</button>
      </div>

      <div className={styles.productCard}>
        <h3 class={styles.productName}>Oculos de Grau</h3>
        <p>Preço: 342</p>
        <button>Comprar</button>
      </div>

      <div className={styles.productCard}>
        <h3 class={styles.productName}>Oculos de Grau</h3>
        <p>Preço: 342</p>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Home;

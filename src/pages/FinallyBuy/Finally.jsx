// import style from './Home.module.scss'
import styles from "./Finally.module.css";
import noteIcon from '../../assets/images/buflo_billing-info.svg'
import checkIcon from '../../assets/images/check_ring_round.svg'

export function Finally() {;

  return (
    <div className={styles.finallyContainer}>
      <div className={styles.paragraphContainer}>
      <p><img src={checkIcon} alt="" />Compra finalizada!</p>
      </div>
      <button className={styles.finallyButton}><img src={noteIcon} alt="" />Baixar comprovante</button>
    </div>
  );
}

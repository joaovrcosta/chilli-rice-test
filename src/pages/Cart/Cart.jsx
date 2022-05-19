// import style from './Home.module.scss'
import styles from "./Cart.module.css";
import deleteIcon from '../../assets/images/delete.svg'
import incressedIcon from '../../assets/images/incresseIcon.svg'
import decrementIcon from '../../assets/images/decrementIcon.svg'

export function Cart() {
  return (
    <div className={styles.cartContainer}>
    <div className={styles.productTable}>
      <thead>
        <tr>
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th src={deleteIcon}/>
        </tr>
      </thead>
      <tbody>
        {/* {cartFormatted.map((product) => () */}
        <tr>
          <td>
            <strong>Oculos Gucci</strong>
            <span>R$ 219,90</span>
          </td>
          <td>
            <div>
              <button type="button" className={styles.decrementIcon}><img src={decrementIcon} alt="" /></button>
              <input type="number" />
              <button type="button" className={styles.decrementIcon}><img src={incressedIcon} alt="" /></button>
            </div>
          </td>
          <td>
            <strong>R$ 219,90</strong>
          </td>
          <td>
            <button type="button" className={styles.decrementIcon}><img src={deleteIcon} alt="" /></button>
          </td>
        </tr>
      </tbody>
      </div>
      <footer>
        <button type="button">Finalizar pedido</button>
        <div className={styles.total}>
          <span>TOTAL</span>
          <strong>R$ 219,90</strong>
          </div>
      </footer>
    </div>
  );
}

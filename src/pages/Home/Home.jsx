// import style from './Home.module.scss'
import data from '../../database/Data'
import styles from './Home.module.css';


export function Home() {
    const { productItems } = data;


    return (
        <div className={styles.homeContainer}>
            <h1>Home</h1>
        </div>
    )
}
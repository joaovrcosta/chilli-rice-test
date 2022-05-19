import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/images/cart.svg'
import logoChilli from '../../assets/images/logochillibeans.png'

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        
        <><a href="/"><img src={logoChilli} className={styles.chilliLogo} alt="" /></a></>
        <div class="theme">
        <Link to="/register">
        <button className={styles.buttonRegister}>Cadastrar</button>
        </Link>
        </div>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
      </div>
    </header>
  );
};


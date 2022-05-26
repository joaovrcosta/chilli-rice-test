import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/images/Shopping-cart.svg'
import logoChilli from '../../assets/images/logo-pt__large_plus.png'

export function Header() {
  return (
    <header>
      <div className={styles.headerContainerOne}>
      <div className={styles.headerContainer}>
        <><a href="/"><img src={logoChilli} className={styles.chilliLogo} alt="" /></a></>
        <div className="theme">
          <Link to="/register">
            <button className={styles.buttonRegister}>Cadastrar</button>
          </Link>
        </div>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
      </div>
      </div>
    </header>
  );
};


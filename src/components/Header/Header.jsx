import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        
        <h2><a href="/">Chilli Rice</a></h2>
        <div class="theme">
        <Link to="/register">
        <button className={styles.buttonRegister}>Cadastrar</button>
        </Link>
        </div>
        <Link to="/cart">
        <button class={styles.cartButton}>
          <img src="./assets/github-logo.svg" alt="" />
          Carrinho
        </button>
        </Link>
      </div>
    </header>
  );
};


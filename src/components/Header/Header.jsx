import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/cadastrar">
            Cadastrar
        </Link>
        <Link className={styles.login} to="/cart">
          Carrinho
        </Link>
      </nav>
    </header>
  );
};


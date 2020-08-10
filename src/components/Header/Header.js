import React from 'react';

import styles from './Header.module.scss'

export default () => {
  

  return (
    <header>
      <nav className={styles.header_nav_container}>
        <div className={styles.logo}>
          <img src='/files/images/marketiva_logo_white_512-512px.png' />
        </div>
        <div className={styles.empty_space}>
          by Zahar Zagrava
        </div>
      </nav>
    </header>
  )
};
// components/Layout.js
import React from 'react';
import styles from './Layout.module.css';
import Logo from '@leafygreen-ui/logo';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div class="icon-container">
            {/* <img src="path_to_icon/person_icon.png" alt="Person Icon" /> */}
            <span>Nombre</span>
        </div>
        <h1>Leafy Airline Dashboard</h1>
        <Logo className={styles.logo} />
      </header>
      <div className={styles.main}>
        <aside className={styles.sidebar}>
          <h2>Filters</h2>
          {/* Add your filter components here */}
        </aside>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

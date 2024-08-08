import React from 'react';
import styles from './GeneralLayout.module.css';
import headerStyles from './Header.module.css'; // Import the new header CSS file
import footerStyles from './Footer.module.css'; // Import the footer CSS file
import Logo from '@leafygreen-ui/logo';
import Icon from "@leafygreen-ui/icon";
import Image from "next/image";

const GeneralLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={headerStyles.header}>
        <div className={headerStyles.logo_container}>
          <Image
          src="/leafylogo.svg" 
          alt="Leafy Logo"
          width={200} 
          height={150} 
          className={styles.logo} 
        />
        </div>
        <div className={headerStyles.title_container}>
          <h3>General Overview</h3>
        </div>
        <div className={styles.rightheaderContainer}>
          <a href="/instructions" className={headerStyles.infoButton}>Instructions of Use</a>
          <div className={headerStyles.icon_container}>
            <Icon glyph='Person' fill="#00684A" size='xlarge'/>
            <span>Francesco Baldissera</span>
            <span>FO. Manager</span>
          </div>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerContent}>
          <p>&copy; 2024 MongoDB. All rights reserved.</p>
          <p>
            Leafy Air Demo developed by IS Team 
          </p>
        </div>
        <div className={footerStyles.footerImage}>
          <Logo className={footerStyles.logo}></Logo>
        </div>
      </footer>
    </div>
  );
};

export default GeneralLayout;
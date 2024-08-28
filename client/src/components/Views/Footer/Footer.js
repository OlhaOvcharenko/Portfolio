import styles from "../Footer/Footer.module.scss"
import React, { useState } from 'react';

const Footer = () => {
  const [isFooterVisible, setFooterVisible] = useState(false);

  const toggleFooterVisibility = () => {
    setFooterVisible(!isFooterVisible);
  };

  return (
    <div>
      <div className={`${styles.arrowContainer} ${isFooterVisible ? styles.arrowAboveFooter : ''}`} onClick={toggleFooterVisibility}>
        <span className={styles.smallArrow}></span>
        <span className={styles.arrow}></span>
      </div>
      <div className={`${styles.footerContainer} ${isFooterVisible ? styles.showFooter : ''}`}>
        <div className={styles.socialMedia}>
          <div className={styles.mediaIcons}>
            <a href="https://www.instagram.com/olga_ovcharenko_22_/" target="_blank">
              <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1" className={styles.mediaImg}/>
            </a>
            <a href="https://www.facebook.com/olga.ovcharenko.589/" target="_blank" className={styles.fb}>
              <img width="40" height="40" src="https://img.icons8.com/material/50/facebook-new.png" alt="facebook-new" className={styles.mediaImg}/>
            </a>
            <a href="www.linkedin.com/in/olha-ovcharenko-2633632b0" target="_blank" className={styles.ln}>
              <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/50/linkedin.png" alt="linkedin" className={styles.mediaImg}/>
            </a>
          </div>
          <div className={styles.footerText}>
            <p> © 2024 OLHA OVCHARENKO </p>
          </div>
          
        </div>
      </div>
    </div>
  )
};
  
export default Footer;
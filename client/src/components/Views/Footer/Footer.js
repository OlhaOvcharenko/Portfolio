import styles from "../Footer/Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.socialMedia}>
        <div className={styles.mediaIcons}>
          <a href="https://www.instagram.com/olga_ovcharenko_22_/" target="_blank">
            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1"/>
          </a>
          <a href="https://www.facebook.com/olga.ovcharenko.589/" target="_blank" className={styles.fb}>
            <img width="40" height="40" src="https://img.icons8.com/material/50/facebook-new.png" alt="facebook-new"/>
          </a>
          <a href="www.linkedin.com/in/olha-ovcharenko-2633632b0" target="_blank" className={styles.ln}>
            <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/50/linkedin.png" alt="linkedin"/>
          </a>
        </div>
        <div className={styles.footerText}>
          <p> © 2024 OLHA OVCHARENKO </p>
        </div>
      </div>
    </div>
  )
};
  
export default Footer;
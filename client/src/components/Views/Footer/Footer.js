import styles from "../Footer/Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.socialMedia}>
        <div>
          <a href="https://www.instagram.com/olga_ovcharenko_22_/" target="_blank">
            <img width="30" height="30" src="https://img.icons8.com/3d-fluency/50/instagram-new.png" alt="instagram-new"/>
          </a>
          <a href="https://www.facebook.com/olga.ovcharenko.589/" target="_blank">
            <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/facebook-circled.png" alt="facebook-circled"/>
          </a>
          <a href="www.linkedin.com/in/olha-ovcharenko-2633632b0" target="_blank">
            <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/>
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
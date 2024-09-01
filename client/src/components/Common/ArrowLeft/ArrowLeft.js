import styles from "../ArrowLeft/ArrowLeft.module.scss"
import { Link } from "react-router-dom";

const ArrowLeft = ({ to }) => (
  <Link to={to} style={{ textDecoration: 'none', color: 'inherit', padding:'0', ...styles }}>
    <div className={styles.arrowContainer}>
      <span className={styles.arrow}></span>
    </div>
  </Link>
);
  
export default ArrowLeft;
  
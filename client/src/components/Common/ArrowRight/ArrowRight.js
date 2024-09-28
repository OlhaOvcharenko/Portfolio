import styles from "../ArrowRight/ArrowRight.module.scss"
import { Link } from "react-router-dom";

const ArrowRight = ({ onClick }) => (
  <Link onClick={onClick} style={{ textDecoration: 'none', color: 'inherit', padding:'0', ...styles }}>
    <div className={styles.arrowContainer}>
      <span className={styles.arrow}></span>
    </div>
  </Link>
);
  
export default ArrowRight;
  
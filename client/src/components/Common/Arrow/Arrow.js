import styles from "../Arrow/Arrow.module.scss"
import { Link } from "react-router-dom";

const Arrow = ({ to }) => (
  <Link to={to} style={{ textDecoration: 'none', color: 'inherit', padding:'0' }}>
    <div className={styles.arrowContainer}>
      <span className={styles.arrow}></span>
    </div>
  </Link>
);
  
export default Arrow;
  
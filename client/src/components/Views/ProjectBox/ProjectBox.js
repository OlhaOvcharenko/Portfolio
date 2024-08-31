import { IMAGES_URL } from "../../../config";
import { Link } from "react-router-dom";
import styles from "../ProjectBox/ProjectBox.module.scss";

const ProjectBox = ({ project }) => {
  return (
    <div className={styles.projectBox}>
      <div className={styles.titleBox}>
        <h2 className={styles.boxName}>{project.title}</h2>
        <Link style={{ textDecoration: 'none', color: 'inherit', padding:'0' }}>
          <div className={styles.btnBox}>
            Read more ⟶
          </div>
        </Link>
      </div>
      <img 
        src={`${IMAGES_URL}/${project.mainImg}`} 
        alt={project.title} 
        className={styles.mainImg} 
      />
    </div>
    );
  };
  
  export default ProjectBox;
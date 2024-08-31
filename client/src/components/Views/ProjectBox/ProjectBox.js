import { IMAGES_URL } from "../../../config";
import styles from "../ProjectBox/ProjectBox.module.scss";

const ProjectBox = ({ project }) => {
  return (
    <div className={styles.projectBox}>
      <div className={styles.titleBox}>
        <h2 className={styles.boxName}>{project.title}</h2>
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
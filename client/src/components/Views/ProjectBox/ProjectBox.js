import { Row, Card, Col } from "react-bootstrap";
import { IMAGES_URL } from "../../../config";
import styles from "../ProjectBox/ProjectBox.module.scss";

const ProjectBox = ({ project }) => {
  return (
    <div className={styles.projectBox}>
      <h1>{project.title}</h1>
      <img 
        src={`${IMAGES_URL}/${project.mainImg}`} 
        alt={project.title} 
        className={styles.mainImg} 
      />
    </div>
  );
  };
  
  export default ProjectBox;
import { Row, Container } from "react-bootstrap";
import styles from "../Projects/Projects.module.scss";
import { useSelector } from "react-redux";
import { getAllProjects } from "../../../redux/projectsRedux";
import ProjectBox from "../../Views/ProjectBox/ProjectBox";

const Projects = () => {

  const allProjects = useSelector(getAllProjects);

  return (
    <div className={styles.containerProjects}>
      <h1>All Projects</h1>
        <Row xs={1} md={2} lg={2} className=" g-4 py-3">
          {allProjects.map(project => (
          <ProjectBox key={project.id} project={project}/>  
        ))}
      </Row>
    </div>
  );
}
  
export default Projects;

import styles from "../Projects/Projects.module.scss";
import { useSelector } from "react-redux";
import { getAllProjects } from "../../../redux/projectsRedux";
import ProjectBox from "../../Views/ProjectBox";

const Projects = () => {

  const allProjects = useSelector(getAllProjects);
  console.log(allProjects)
    return (
    <div className={styles.container}>
      <h1 className="text-center">All Projects</h1>
      {allProjects.map(project => (
        <ProjectBox key={project.id} project={project}/>
      ))}
    </div>
    );
  };
  
export default Projects;
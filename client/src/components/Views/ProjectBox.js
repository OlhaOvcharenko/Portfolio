import { useSelector } from "react-redux";
import { getAllProjects } from "../../redux/projectsRedux";

const ProjectBox = ({project}) => {

 
  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
};

export default ProjectBox;
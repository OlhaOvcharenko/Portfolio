import { Row, Container, Col } from "react-bootstrap";
import styles from "../Projects/Projects.module.scss";
import { useSelector } from "react-redux";
import { getAllProjects } from "../../../redux/projectsRedux";
import ProjectBox from "../../Views/ProjectBox/ProjectBox";
import PageContainer from "../../Common/PageContainer/PageContainer";

const Projects = () => {

  const allProjects = useSelector(getAllProjects);

  return (
    <PageContainer>
      <h1 className="text-center"><i>All Projects</i></h1>
        <Container>
          <Row lg={1}className=" g-4 py-3">
          
          {allProjects.map(project => (
            <Col key={project.id} className="d-flex justify-content-center">
              <ProjectBox project={project} />
            </Col>
          ))}
         
      </Row>
      </Container>
    </PageContainer>
  );
}
  
export default Projects;
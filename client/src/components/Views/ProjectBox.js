import { Row, Card, Col } from "react-bootstrap";
import { IMAGES_URL } from "../../config";

const ProjectBox = ({ project }) => {
    return (
      <div>
        <Row className="text-center">
          <Col>
            <h1>{project.title}</h1>
            <img 
              src={`${IMAGES_URL}/${project.mainImg}`} 
              alt={project.title} 
            />
          </Col>
        </Row>
      </div>
    );
  };
  
  export default ProjectBox;
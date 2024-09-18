import { useParams } from "react-router-dom";
import PageContainer from "../../Common/PageContainer/PageContainer";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getProjectById } from "../../../redux/projectsRedux";
import styles from "../SingleProject/SingleProject.module.scss";
import Gallery from "../../Views/Gallery/Gallery";

const SingleProject = () => {
  const {id} = useParams();

  const projectData = useSelector(state => getProjectById(state, id))
  const galleryImages = projectData.gallery.split(',');
  const paragraphText = projectData.paragrapgh2;

  return (
    <PageContainer>
      <h1>{projectData.title}</h1>
      <Container>
        <Row className="justify-content-center">

          <Col xs={12} lg={8} className="pt-3">
            <Gallery galleryImages={galleryImages} />
          </Col>
          <Col xs={12} lg={8}>
            <div>
              <p className="pt-5">{projectData.paragrapgh1}</p>
              <h2 className={styles.subTitle}>Features</h2>
              {paragraphText.split('\n').map((line, index) => (
              <p key={index} >{line}</p>
              ))}
            </div>
          </Col>

        </Row>
      </Container>
    </PageContainer>
  )
}

export default SingleProject;
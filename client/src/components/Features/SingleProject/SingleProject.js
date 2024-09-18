import { useParams } from "react-router-dom";
import PageContainer from "../../Common/PageContainer/PageContainer";
import { Col, Row } from "react-bootstrap";
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
      <h1 className={styles.title}>{projectData.title}</h1>
      <Row className="px-5 justify-content-center">

        <Col md={8} className="px-5">
          <Gallery galleryImages={galleryImages} />
        </Col>
        <Col md={8} className="px-5">
          <div>
            <p className="pt-5">{projectData.paragrapgh1}</p>
            <h2 className={styles.subTitle}>Features</h2>
            {paragraphText.split('\n').map((line, index) => (
            <p key={index} >{line}</p>
            ))}
          </div>
        </Col>

      </Row>
    </PageContainer>
  )
}

export default SingleProject;
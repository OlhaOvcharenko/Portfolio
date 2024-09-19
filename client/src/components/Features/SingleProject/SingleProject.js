import { useParams } from "react-router-dom";
import PageContainer from "../../Common/PageContainer/PageContainer";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { allIds, getProjectById } from "../../../redux/projectsRedux";
import styles from "../SingleProject/SingleProject.module.scss";
import Gallery from "../../Views/Gallery/Gallery";
import { useNavigate} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group"

const SingleProject = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const allProjectIds = useSelector(allIds);
  const currentIndex = allProjectIds.indexOf(id);

  
  const projectData = useSelector(state => getProjectById(state, id))
  const galleryImages = projectData.gallery.split(',');
  const paragraphText = projectData.paragrapgh2;
  

  const handleNext = () => {
    if (currentIndex < allProjectIds.length - 1) {
      navigate(`/projects/${allProjectIds[currentIndex + 1]}`);
    }
  };

  return (
    <PageContainer>
      <TransitionGroup>
        <CSSTransition key={id} timeout={2000} 
        classNames={{
          enter: styles['fade-enter'],
          enterActive: styles['fade-enter-active'],
          exit: styles['fade-exit'],
          exitActive: styles['fade-exit-active'],
        }}
      >
          <div>
            <div className={styles.titleBox}>
              <button onClick={() => navigate(-1)} className={styles.navBtn}>
                Previous
              </button>
              <h1 className={styles.pageTitle}>{projectData.title}</h1>
              {currentIndex < allProjectIds.length - 1 && (
                <button onClick={handleNext} className={styles.navBtn}>
                  Next
                </button>
              )}
            </div>
            <Container>
              <Row className="justify-content-center">
                <Col xs={12} lg={8} className="pt-5">
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
          </div>
        </CSSTransition>
      </TransitionGroup>
    </PageContainer>
  )
}

export default SingleProject;
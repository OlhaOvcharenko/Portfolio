import { useParams } from "react-router-dom";
import PageContainer from "../../Common/PageContainer/PageContainer";
import { useSelector } from "react-redux";
import { getProjectById } from "../../../redux/projectsRedux";
import styles from "../SingleProject/SingleProject.module.scss";
import { IMAGES_URL } from "../../../config";
import Gallery from "../../Views/Gallery/Gallery";


const SingleProject = () => {
  const {id} = useParams();

  const projectData = useSelector(state => getProjectById(state, id))
  const galleryImages = projectData.gallery.split(',');
  const paragraphText = projectData.paragrapgh2;

  return (
    <PageContainer>
      <div className={styles.decorativeBox}>
        <img src={`${IMAGES_URL}/item_img.jpg`} 
          alt={projectData.title}  className={styles.decorativeImg}
         />
      </div>
      <h1 className={styles.title}>{projectData.title}</h1>
      <p className={styles.overview }>{projectData.paragrapgh1}</p>
      <Gallery galleryImages={galleryImages} />
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>Features</h2>
        {paragraphText.split('\n').map((line, index) => (
          <p key={index} >{line}</p>
        ))}
      </div>
    </PageContainer>

  )
}

export default SingleProject;
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
  console.log(projectData);
  const galleryImages = projectData.gallery.split(',');
  console.log(galleryImages)
  return (
    <PageContainer>
      <div className={styles.decorativeBox}>
        <img src={`${IMAGES_URL}/item_img.jpg`} 
          alt={projectData.title}  className={styles.decorativeImg}
         />
      </div>
      <h1 className={styles.title}>{projectData.title}</h1>
      <Gallery galleryImages={galleryImages} />
      <div className="mx-5">
        <p>{projectData.paragrapgh1}</p>
        <p>{projectData.paragrapgh2}</p>
      </div>
    </PageContainer>

  )
}

export default SingleProject;
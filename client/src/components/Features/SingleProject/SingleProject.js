import { useParams } from "react-router-dom";
import PageContainer from "../../Common/PageContainer/PageContainer";
import { useSelector } from "react-redux";
import { getProjectById } from "../../../redux/projectsRedux";
import styles from "../SingleProject/SingleProject.module.scss";
import { IMAGES_URL } from "../../../config";

const SingleProject = () => {
  const {id} = useParams();

  const projectData = useSelector(state => getProjectById(state, id))
  console.log(projectData);

  return (
    <PageContainer>
      <div className={styles.decorativeBox}>
        <img src={`${IMAGES_URL}/item_img.jpg`} 
          alt={projectData.title}  className={styles.decorativeImg}
         />
      </div>
      <h1 className={styles.title}>{projectData.title}</h1>
    </PageContainer>

  )
}

export default SingleProject;
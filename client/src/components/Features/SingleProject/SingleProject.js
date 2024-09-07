import { useParams } from "react-router-dom";
import PageContainer from "../../Common/PageContainer/PageContainer";
import { useSelector } from "react-redux";
import { getProjectById } from "../../../redux/projectsRedux";

const SingleProject = () => {
  const {id} = useParams();

  const projectData = useSelector(state => getProjectById(state, id))
  console.log(projectData);

  return (
    <PageContainer>
      <h1>{projectData.title}</h1>
    </PageContainer>

  )
}

export default SingleProject;
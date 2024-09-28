import PageContainer from "../../Common/PageContainer/PageContainer";
import Intro from "../../Views/Intro/Intro";

const Home = () => {
  return (
    <div>
      <PageContainer  toNext={"/projects"} toPrevious={"/contact"}>
        <Intro />
      </PageContainer>
    </div>
  )
};
  
export default Home;
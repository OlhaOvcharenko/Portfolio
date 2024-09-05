import PageContainer from "../../Common/PageContainer/PageContainer";
import ArrowRight from "../../Common/ArrowRight/Arrow";
import ArrowLeft from "../../Common/ArrowLeft/ArrowLeft";

const About = () => {
    return (
      <PageContainer>
        <h1>About</h1>
        <ArrowRight to="/contact" />
        <ArrowLeft to="/projects" />
      </PageContainer>
    );
  };
  
  export default About;
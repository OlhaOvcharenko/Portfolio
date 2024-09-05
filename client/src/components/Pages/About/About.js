import PageContainer from "../../Common/PageContainer/PageContainer";
import ArrowRight from "../../Common/ArrowRight/Arrow";
import ArrowLeft from "../../Common/ArrowLeft/ArrowLeft";
import { IMAGES_URL } from "../../../config";
import styles from "../About/About.module.scss";


const About = () => {
    const profileImageUrl = `${IMAGES_URL}/profile_photo.jpg`;
    return (
      <PageContainer>
        <h1>A few words about me...</h1>
        <ArrowRight to="/contact" />
        <ArrowLeft to="/projects" />
        <div className={styles.aboutBox}>
          <div  className={styles.infoBox}>
            <div  className={styles.textBox}>
                <p>I'm a Full-Stack Developer with a passion for creating innovative and user-friendly web applications.</p>
                <p>With a focus on front-end and back-end development, I strive to deliver high-quality solutions that meet the unique needs of each project.</p> 
                <p>This is a space where I showcase my work and share my journey in the world of web development.</p>
            </div>
            <div>
                <p>[...click here to check CV]</p>
            </div>
          </div>
          <div className={styles.photoBox}>
            <img src={profileImageUrl} alt="Brand Logo" />
          </div>
        </div>
      </PageContainer>
    );
  };
  
  export default About;
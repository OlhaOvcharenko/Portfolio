import PageContainer from "../../Common/PageContainer/PageContainer";
import ArrowRight from "../../Common/ArrowRight/Arrow";
import ArrowLeft from "../../Common/ArrowLeft/ArrowLeft";
import styles from "../About/About.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const About = () => {

  return (
    <PageContainer toNext={"/contact"} toPrevious={"/projects"} >
      <div>
      <h1>A few words about me...</h1>
      <div className={styles.aboutBox}>
        <div  className={styles.infoBox}>
          <div  className={styles.textBox}>
              <p>I'm a Full-Stack Developer with a passion for creating innovative and user-friendly web applications.</p>
              <p>With a focus on front-end and back-end development, I strive to deliver high-quality solutions that meet the unique needs of each project.</p> 
              <p>This is a space where I showcase my work and share my journey in the world of web development.</p>
          </div>
          <div>
            <a href="https://drive.google.com/file/d/1iATl3N3q0vb-_kndF9ub40NTyj32G0g_/view?usp=sharing"
              target="_blank" className={styles.aboutLink} > 
              [...click here to check CV
            ]</a>
          </div>
        </div>
      </div>
      </div>
    </PageContainer>
  );
};
  
  export default About;
import PageContainer from "../../Common/PageContainer/PageContainer";
import styles from "../Intro/Intro.module.scss";
import Arrow from "../../Common/Arrow/Arrow";

const Intro = () => (
  <section className={styles.Intro}>
    <PageContainer>
      <div className={styles.text}>
        <h1 className="text-center my-5">Hi, my name is Olha Ovcharenko!</h1>
        <p>I am a Junior Full Stack Developer.</p>
        <p>Explore my projects.</p>
        <p>Feel free to contact me, share your thoughts and ideas at ovcharenko.olga.2014@gmail.com.</p>
      </div>
      <Arrow to="/projects" />
    </PageContainer>
  </section>
);

export default Intro;
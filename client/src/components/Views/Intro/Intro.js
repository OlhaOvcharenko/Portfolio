import PageContainer from "../../Common/PageContainer/PageContainer";
import styles from "../Intro/Intro.module.scss";

const Intro = () => (
  <section className={styles.Intro}>
    <PageContainer>
      <div className={styles.text}>
        <h1 className="text-center my-5">Hi, my name is Olha Ovcharenko!</h1>
        <p>I am a Junior Full Stack Developer.</p>
        <p>Explore my projects.</p>
        <p>Feel free to contact me, share your thoughts and ideas at ovcharenko.olga.2014@gmail.com.</p>
      </div>
      <div className={styles.arrowContainer}>
        <span className={styles.arrow}></span>
      </div>
    </PageContainer>
  </section>
);

export default Intro;
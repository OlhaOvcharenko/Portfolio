import styles from "../Intro/Intro.module.scss";

const Intro = () => (
    <section className={styles.Intro}>
      <div className={styles.container}>
        <h1 className="text-center my-5">Hi, my name is Olha Ovcharenko!</h1>
        <p>I am a Junior Full Stack Developer. Explore my projects.</p>
        <p>Feel free to contact me, share your thoughts and ideas at ovcharenko.olga.2014@gmail.com.</p>
      </div>
      <div className={styles.arrowContainer}>
        <div className={styles.arrow}></div>
      </div>
    </section>
  );

export default Intro;
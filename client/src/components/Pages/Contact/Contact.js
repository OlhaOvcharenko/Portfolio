import ArrowLeft from "../../Common/ArrowLeft/ArrowLeft"
import ArrowRight from "../../Common/ArrowRight/Arrow"
import PageContainer from "../../Common/PageContainer/PageContainer"
import styles from "../Contact/Contact.module.scss"


const Contact = () => {
  return (
    <PageContainer>
      <ArrowRight to="/" />
      <ArrowLeft to="/about" />
      <h1 className="text-center">Contact me</h1>
      <h3 className={styles.subTitle}>Interested in collaborating on a project or discussing a potential opportunity? </h3>
      <h3 className={styles.subTitle}>Feel free to reach out to me using the form below.</h3>
      <form>
        <div className={styles.contactBox}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name"required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="text">Message</label>
            <input type="text" id="text" name="text" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="text">Subject</label>
            <input type="text" id="text" name="text" required />
          </div>
        </div>

        <div className={styles.textBox}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.btnSubmit}>Send message</button>
        </div>

      </form>
  </PageContainer>
  )
}

export default Contact;
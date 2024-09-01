import ArrowLeft from "../../Common/ArrowLeft/ArrowLeft"
import ArrowRight from "../../Common/ArrowRight/Arrow"
import PageContainer from "../../Common/PageContainer/PageContainer"


const Contact = () => {
  return (
    <PageContainer>
      <ArrowRight to="/About" />
      <ArrowLeft to="/projects" />
      <h1 className="text-center">Contact me</h1>
      <h3>Interested in collaborating on a project or discussing a potential opportunity? </h3>
      <h3>Feel free to reach out to me using the form below.</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name"required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="text">Message</label>
          <input type="text" id="text" name="text" required />
        </div>
        <div className="form-group">
          <label htmlFor="text">Subject</label>
          <input type="text" id="text" name="text" required />
        </div>
        
        <button type="submit" className="btn btn-primary">Send message</button>
    </form>
  </PageContainer>
  )
}

export default Contact;
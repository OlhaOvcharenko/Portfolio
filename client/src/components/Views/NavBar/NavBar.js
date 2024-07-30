import { Navbar, Nav,  NavLink }from "react-bootstrap";
import styles from "../NavBar/NavBar.module.scss"

const NavBar = () => {
  return (
    <section className="NavBar">
      <Navbar expand="lg" className={styles.navContainer}>
        <Navbar.Brand href="#home" className='text-light'>
          <img 
            src="https://static.wixstatic.com/media/e6e940_daf929c2590b4e42ac8b8ee204a8f1ed~mv2.jpg" 
            alt="Brand Logo" 
            className={styles.img} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mobile-menu" className={styles.toggleBtn} />
        <Navbar.Collapse id="mobile-menu" className="justify-content-end " >
        <Nav>
          <Nav.Link as={NavLink} to="/" className='text-light' >
            <p className={styles.link}>HOME</p>
          </Nav.Link> 
          <Nav.Link as={NavLink} to="/projects" className='text-light' >
            <p className={styles.link}>PROJECTS</p>
          </Nav.Link> 
          <Nav.Link as={NavLink} to="/contact" className='text-light' >
            <p className={styles.link}>CONTACT</p>
          </Nav.Link> 
          <Nav.Link as={NavLink} to="/about" className='text-light' >
            <p className={styles.link}>ABOUT</p>
          </Nav.Link>              
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </section>
  )  
}

export default NavBar;
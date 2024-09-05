import { Navbar, Nav,  NavLink }from "react-bootstrap";
import styles from "../NavBar/NavBar.module.scss"

const NavBar = () => {
  return (
    <section className="NavBar">
      <Navbar expand="lg" className={styles.navContainer}>
        <Navbar.Brand href="#home" className='text-light pt-0 pb-0'>
        <Nav.Link href="/" >
          <img 
            src="https://static.wixstatic.com/media/e6e940_daf929c2590b4e42ac8b8ee204a8f1ed~mv2.jpg" 
            alt="Brand Logo" 
            className={styles.img} 
          />
        </Nav.Link>
        </Navbar.Brand>
        <span  className={styles.toggleBtn} >
          <Navbar.Toggle aria-controls="mobile-menu"/>
        </span>
        <Navbar.Collapse id="mobile-menu" className="justify-content-end " >
        <Nav>
          <Nav.Link href="/" className='text-light' >
            <p className={styles.link}>HOME</p>
          </Nav.Link> 
          <Nav.Link href="/projects" className="text-light">
            <p className={styles.link}>PROJECTS</p>
          </Nav.Link>
          <Nav.Link href="/about" className='text-light' >
            <p className={styles.link}>ABOUT</p>
          </Nav.Link>      
          <Nav.Link href="/contact" className='text-light' >
            <p className={styles.link}>CONTACT</p>
          </Nav.Link>         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </section>
  )  
}

export default NavBar;
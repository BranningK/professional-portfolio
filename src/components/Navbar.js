import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import linkedInBlue from '../assets/logos/linkedIn/linkedInBlue.png';
import twitterBlue from '../assets/logos/twitter/twitterBlue.png';
import githubDark from '../assets/logos/github/githubDark.png';
import darkSignature from '../assets/darkSignature.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const [activeLang, setActiveLang] = useState('lang');
  const [activeState, setActiveState] = useState('state');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  const onUpdateActiveLang = (value) => {
    setActiveLang(value);
  }
  const onUpdateActiveState = (value) => {
    setActiveState(value);
  }

  return (
    <Navbar expand="lg" className={ scrolled ? "scrolled": ""  }>
      <Container>
        <Navbar.Brand href="#home"><img className='sig' src={darkSignature} alt='Signature reading Branning Knight'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link': 'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link': 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={ activeLink === 'projects' ? 'active navbar-link': 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#resume" className={ activeLink === 'resume' ? 'active navbar-link': 'navbar-link' } onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icons'>
              <a href='https://www.linkedin.com/in/branningknight/'><img src={ linkedInBlue } alt="LinkedIn logo that links to Branning Knight's LinkedIn page"></img></a>
              <a href='https://github.com/BranningK'><img src={ githubDark } alt="Github logo that links to Branning Knight's GitHub page"></img></a>
              <a href='https://twitter.com/BranningK'><img src={ twitterBlue } alt="Twitter logo that links to Branning Knight's Twitter page"></img></a>
            </div>
            <div className='state-selectors'>
              <a>en</a>/<a>fr</a>&nbsp;
              <a>Light</a>/<a>Dark</a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
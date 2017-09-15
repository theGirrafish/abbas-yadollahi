import React, {PureComponent} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import logo from './logo.svg';

class NavigationBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var nav = document.getElementById('nav');
    var navItem = document.getElementById('nav-item');
    if (window.pageYOffset > 50) {
      nav.classList.add("nav-bg");
      navItem.classList.add("nav-text");
    } else {
      nav.classList.remove("nav-bg");
      navItem.classList.remove("nav-text");
    }
  }

  render() {
    return (
      <Navbar id="nav" className="navbar-fixed-top nav-transition">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/" style={{padding: "0"}}>
                <img src={logo} alt="logo" style={{height: "2.5em"}}/>
              </a>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight id="nav-item">
              <NavItem href="/aboutme">About Me</NavItem>
              <NavItem href="/experience">Experience</NavItem>
              <NavItem href="/skills">Skills</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
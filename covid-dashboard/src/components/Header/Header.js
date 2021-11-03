import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import logoPng from '../../public/img/covid-logo.png'
import logoUTS from './utsLogo2.jpeg'
import {  Link } from "react-router-dom";
class Header extends Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    // Get random user info
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results[0],
      loading: false,
    });
  }
  render() {
    const { person, loading } = this.state;

    return (
      <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className="px-5">
        
          
          <Link to="/" className="navbar-brand">
            <img
              alt=""
              src={logoPng}
              width="90"
              height="30"
              style={{borderRadius:15+'px'}}
              className="d-inline-block"
            />{" "}
            </Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" style={{fontWeight:600}}>
            <Nav className="me-auto">
              
              <Link to="/" className="nav-link">Home</Link>
                
              
              <Link to="/global" className="nav-link">Global</Link>
              
              
              <Link to="/lastWeek" className="nav-link">Last Week</Link>
              
              <NavDropdown title="About" id="collasible-nav-dropdown">
   
                <Link to="/about" className="dropdown-item"> The Author</Link>
                <Link to="/aboutProject" className="dropdown-item">The Project</Link>

                <NavDropdown.Divider />
                <NavDropdown.Item href="https://ashzhang.xyz">Blog</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>

              <Navbar.Text className="user-profile-section">
              <img src={logoUTS} width={30}></img>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
     
      </Navbar>
    );
  }
}

export default Header;

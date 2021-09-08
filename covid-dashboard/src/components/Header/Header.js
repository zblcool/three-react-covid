import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import logoPng from '../../public/img/covid-logo.png'
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
        
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoPng}
              width="90"
              height="30"
              style={{borderRadius:15+'px'}}
              className="d-inline-block"
            />{" "}
             
          </Navbar.Brand>
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
              {loading || !person ? (
                <div>loading..</div>
              ) : (
                <Navbar.Text className="user-profile-section">
                  {person.name.first} {person.name.last}
                  <img
                    id="profile-img"
                    src={person.picture.thumbnail}
                    alt="userPic"
                  ></img>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
     
      </Navbar>
    );
  }
}

export default Header;

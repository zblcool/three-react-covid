import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logoPng from '../../public/img/covid-logo.png'
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#global">Global</Nav.Link>
              <Nav.Link href="#lastWeek">Last Week</Nav.Link>
              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  The Author
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  The Project
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Github</NavDropdown.Item>
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

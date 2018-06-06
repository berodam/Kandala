import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Navbarlogo from '../components/navbarLogo';
import instaIcon from '../assets/icons/instagram.svg'
import mailIcon from '../assets/icons/mail.svg'

export default class NavBarClass extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"> <Navbarlogo /> 칸달라 - Kandala</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/classes/">Classes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://smartstore.naver.com/kandala">Store</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">
                    <img src={mailIcon} class="inline-icon" alt=""/> Contact
                  </DropdownItem>
                  <DropdownItem  href="https://www.instagram.com/kandala.korea/">
                    <img src={instaIcon} class="inline-icon" alt=""/> Instagram
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
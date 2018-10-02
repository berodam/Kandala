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
   } from 'reactstrap';
import Navbarlogo from '../components/navbarLogo';
import instaIcon from '../assets/icons/instagram.svg';
import contactIcon from '../assets/icons/contact.svg';
import koreanIcon from '../assets/icons/korea.svg';
import craftsIcon from '../assets/icons/crafts.svg';

import styled from 'styled-components';



const Icon = styled.a`
  content: url(${(props => props.iconUrl)});
  width:20px;
  height:20px;
  margin: 10px 5px;
`

const DropdownItem = styled.a`
  display: block;
  width: 100%;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  color: rgb(0,0,0,.5);

`
const LogoHangul = styled.span`
  font-size: 22px; 
  margin: 0 4px;
`;
const LogoSpan = styled.span`
  font-size: 25px;
  margin: 0 4px;
`;
const CenterAnchor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
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
          <NavbarBrand href="/">
            <Navbarlogo />
              <LogoHangul>칸달라</LogoHangul>
              <LogoSpan>Kandala</LogoSpan>
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://smartstore.naver.com/kandala">Store</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Lessons
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">
                    <NavLink href="/Crafts">
                    <Icon iconUrl={craftsIcon}/>Craft
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/koreanLessons">
                    <Icon iconUrl={koreanIcon}/>Korean
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <CenterAnchor>
                  <Icon iconUrl={contactIcon} href="mailto:iwons@email.com"/>
                </CenterAnchor>
              </NavItem>
              <NavItem>
                <CenterAnchor>
                  <Icon iconUrl={instaIcon} href="https://www.instagram.com/kandala.korea/"/>
                </CenterAnchor>
              </NavItem>  
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
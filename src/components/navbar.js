import React from 'react';
import { Link as ReactRouteLink } from 'react-router-dom';
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

const Link = styled(ReactRouteLink)`
  color: rgba(0,0,0,.5);
  display: block;
  padding: .5rem 1rem;
  &:hover {
    color: rgba(0,0,0,.7);
  }
`

const Icon = styled.a`
  content: url(${(props => props.iconUrl)});
  width: 20px;
  height: 20px;
  margin: ${(props) => (props.mainBar) ? "10px 5px" : "0px 5px"};
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
  @media (max-width: 768px) {
    text-align: center;
  }
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
const Wrapper = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
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
      <Wrapper>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to='/'>
              <Navbarlogo />
                <LogoHangul>칸달라</LogoHangul>
                <LogoSpan>Kandala</LogoSpan>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link to="/products">Products</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://c5c3b.app.goo.gl/LhdtNRfW4z2HU9zE9">Store</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Lessons
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#">
                    <Link to="/Crafts">
                    <Icon iconUrl={craftsIcon}/>Crafts
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/koreanLessons">
                      <Icon iconUrl={koreanIcon}/>Korean
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <CenterAnchor>
                  <Icon iconUrl={contactIcon} mainBar href="mailto:kandala.korea@gmail.com" afterContent="Contact Us"/>
                </CenterAnchor>
              </NavItem>
              <NavItem>
                <CenterAnchor>
                  <Icon iconUrl={instaIcon} mainBar href="https://www.instagram.com/kandala.korea/" afterContent="Instagram"/>
                </CenterAnchor>
              </NavItem>  
              
            </Nav>
          </Collapse>
        </Navbar>
      </Wrapper>
    );
  }
}
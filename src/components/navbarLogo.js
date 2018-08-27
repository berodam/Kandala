import React from 'react';
import logo from '../assets/logo_transparency.png';
import styled from 'styled-components';

const Img = styled.img`
    height: 40px;
`
export default class NavbarLogo extends React.Component {
    render(){
        return (        
            <Img src={logo}/>
    );
  }
}


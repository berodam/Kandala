import React from 'react';
import styled from 'styled-components';

import Jumbotron from '../../components/jumbotron';
import bunnyPic from '../../assets/6.jpg'
import { Container } from 'reactstrap';

const Content = styled.div`
  width: 100%;
  padding-bottom: 1em;
`

const Details = styled.div`
  border: 1px #777 dashed;
  padding: 0 2%;
  flex-wrap: wrap;
`
const Img = styled.div`
  background: url("${(props) => props.bkImg }") center center no-repeat;
  background-size: 100%;
  width: 96%;
  min-height: 25em;
  margin: 2%;
`
const TextContainer = styled.div`
  text-align: center;
`

const ButtonContainer = styled.div`
  margin: .8em 0;
  text-align: center;
`

const P = styled.p`
  font-family: 'AmaticSC-Bold', serif;
  font-size: ${(props) => props.fontsize || 3}rem;
  color: #777;
`;


const EngPText = `WE ALSO PROVIDE KOREAN LESSONS!
FROM BEGINNERS TO ADVANCED,
FROM SPEAKING TO TOPIK
STUDY WITH KANDALA!`

function contact(evt) {
  
}

const A = styled.a`
  background-color:#785454;
  border:1px solid #ffffff;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:13px;
  font-weight:bold;
  padding:10px 25px;
  text-decoration:none;
  &:hover {
    background-color:#946e6e;
  }
  &:active {
    position:relative;
    top:1px;
  }
`;

export const Lesson = (props) => {
  return(
    <Container>
      <Jumbotron EngSpan="KOREAN LESSONS"/>
      <Content>
        <Details>
          <Img bkImg={bunnyPic} />
          <TextContainer>
            <P>WE ALSO PROVIDE KOREAN LESSONS!</P>
            <P>FROM BEGINNERS TO ADVANCED, FROM SPEAKING TO TOPIK</P>
            <P>STUDY KOREAN WITH KANDALA!</P>
          </TextContainer>
          <ButtonContainer>
            <A href="mailto:iwon@teachme.net">Contact Us</A>
          </ButtonContainer>
        </Details>      
      </Content>
    </Container>
  )
}

export default Lesson;
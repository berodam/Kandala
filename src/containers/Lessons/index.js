import React from 'react';
import styled from 'styled-components';

import Jumbotron from '../../components/jumbotron';
import bunnyPic from '../../assets/bukchon_village.jpg'
import { Container } from 'reactstrap';

const Content = styled.div`
  width: 100%;
  padding-bottom: 1em;
`;
const Details = styled.div`
  border: 1px #777 dashed;
  padding: 0 2%;
  flex-wrap: wrap;
`;
const Img = styled.div`
  background: url("${(props) => props.bkImg }") center center no-repeat;
  background-size: 100%;
  width: 96%;
  min-height: 25em;
  margin: 2%;
`;
const TextContainer = styled.div`
  text-align: center;
`;
const ButtonContainer = styled.div`
  margin: .8em 0;
  text-align: center;
`;
const P = styled.p`
  font-family: 'AmaticSC-Bold', serif;
  font-size: ${(props) => props.fontsize || 3}rem;
  color: #777;
`;
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
            <P fontsize={4}>We provide private Korean Lessons</P>
            <P>for any level from beginner to advanced.</P>
            <P>Lessons are tailored to your goal</P>
            <P>From reading to TOPIC and everywhere in between.</P>
            <P fontsize={4}>Let's study with Kandala!</P>
          </TextContainer>
          <ButtonContainer>
            <A href="mailto:koreanlessonsforyou@gmail.com">Contact Us</A>
          </ButtonContainer>
        </Details>      
      </Content>
    </Container>
  )
}

export default Lesson;
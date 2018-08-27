import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Navbar from '../../components/navbar';
import Jumbotron from '../../components/jumbotron';
import sticker from '../../assets/sticker.jpg'

const EngP = styled.p`
  font-family: 'AmaticSC-Bold', serif;
  font-size: 5rem;
  color: #777;
  margin: 10px 1rem;
  border: 1px #777 dashed;
`
const KorP = styled.p`
  font-family: 'MSugiJeong', serif;
  font-size: 5rem;
  color: #777;
  margin: 10px 1rem;
  border: 1px #777 dashed;
`

const Header = styled.h2`
  font-family: 'AmaticSC-Bold', serif;
  margin: 0 auto;
  font-size: 4rem;
`
const Content = styled.div`
`

const EngDetails = styled.div`
  display: flex;
  max-height: 600px;
`
const KorDetails = styled.div`
  display: flex;
  max-height: 600px;
`
const Img = styled.img`
`
const Button = styled.button`

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
`
const EngPText = `KANDALA MAKES 100% HANDMADE scented
  crafts AND PROVIDES CRAFTS LESSONS TAUGHT
  IN ENGLISH & KOREAN .
  What are scented crafts ?
  = air fresheners, candles & perfume`;
const KorPText = `
바닷가 사람
물고기 잡아먹구 살구
산꼴엣 사람
감자 구어먹구 살구
별나라 사람
무얼 먹구 사나.
`


export const About = (props) => {
  return(
    <Container>
      <Jumbotron EngSpan="ABOUT KANDALA"/>
      <Content>
        <Header>KANDALA's PRODUCTS ⊃ STORIES ∪ MEMORIES</Header>
        <EngDetails>
          <Img src={sticker} />
          <EngP>{EngPText}</EngP>
        </EngDetails>
        <Button>More Info</Button>
        <KorDetails>
          <KorP>{KorPText}</KorP>
          <Img src={sticker} />
        </KorDetails>
      </Content>
    </Container>
  )
}

export default About;
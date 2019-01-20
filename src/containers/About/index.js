import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button';
import KorP from '../../components/KorP';
import EngP from '../../components/EngP';

import Jumbotron from '../../components/jumbotron';
import sticker from '../../assets/sticker.jpg'
import thankYou from '../../assets/narrow_thanks.jpg'
import Spacer from '../../components/Spacer';


const Header = styled.h2`
  font-family: 'AmaticSC-Bold', serif;
  margin: 0 auto;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`
const Content = styled.div`
`

const EngDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: .8em 0;
  padding: .8em 0;
`
const KorDetails = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  margin: .8em 0;
  padding: .8em 0;
`
const Img = styled.img`
  height: 100%;
  margin: 0em;
  flex: 1 1;
`
const ButtonContainer = styled.div`
  margin: .8em 0;
`

export const About = (props) => {
  return(
    <Container>
      <Jumbotron EngSpan="ABOUT KANDALA"/>
      <Content>
        <Header>PRODUCTS ⊃ STORIES ∪ MEMORIES</Header>
        <EngDetails>
          <Img src={sticker} />
          <EngP fontsize={3.5}>
            <p><h1>Kandala</h1></p>
            <p>makes 100% handmade scendted crafts and provides</p>
            <p>crafts lessons in both English & Korean</p>
            <Spacer height={'10px'} />
            <p>We create scent infused plaster</p>
            <p>air fresheners, candles & perfumes.</p>
          </EngP>
        </EngDetails>
        <ButtonContainer>
          <Link to='/products'><Button>More Info</Button></Link>
        </ButtonContainer>
        <KorDetails>
          <KorP fontsize={3}>
            <h1>칸달라</h1><h2>는</h2>
            <p>석고방향제와 같은 핸드메이드</p>
            <p>제품을 만들니다.</p>
            <br></br>
            <h1>칸달라</h1><h2>는</h2>
            <p>취미클래스와 전문가과정수업을</p>
            <p>영어 또는 한국어 제공합니다.</p>          
          </KorP>
          <Img src={thankYou} />
        </KorDetails>
      </Content>
    </Container>
  )
}

export default About;
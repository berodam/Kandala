import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
 
import Button from '../../components/Button';
import KorP from '../../components/KorP';
import EngP from '../../components/EngP';

import Jumbotron from '../../components/jumbotron';
import bunnyPic from '../../assets/6.jpg'
import plasterPic from '../../assets/1.jpg'

const Header = styled.h2`
  font-family: 'AmaticSC-Bold', serif;
  margin: 0 auto 1rem;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 576px) {
    font-size: 3.5rem;
  }
`
const Content = styled.div`
  width: 100%;
  padding-bottom: 1em;
`

const EngDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const KorDetails = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
`
const Img = styled.div`
  flex: 1 1 400px;
  background: url("${(props) => props.bkImg }") center center no-repeat;
  background-size: 100%;
  max-width: 450px;
  min-height: 100%;
  @media all and (max-width: 991px) { 
    min-height: 15em;
    max-width: 100%;
    margin-bottom: 0.5em;
  };
`
const TextContainer = styled.div`
  flex: 1 1 400px;
`

const ButtonContainer = styled.div`
  margin: .8em 0;
  text-align: right;
`

export const Products = (props) => {
  return(
    <Container>
      <Jumbotron EngSpan="PRODUCTS"/>
      <Content>
        <Header>STORY + MEMORY = UNIQUE</Header>
        <EngDetails>
          <Img bkImg={bunnyPic} />
          <TextContainer>
            <EngP fontsize={3}>
              <h1>We combine rich fragrance</h1>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with unique designs</p>
              <h1>One of a kind gift for yourself</h1>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or someone you love</p>
            </EngP>
          </TextContainer>
        </EngDetails>
        <ButtonContainer>
          <a href='https://c5c3b.app.goo.gl/LhdtNRfW4z2HU9zE9'><Button>Buy Now</Button></a>
        </ButtonContainer>
        <KorDetails>
          <TextContainer>
            <KorP fontsize={3}>
              <h1>칸달라</h1><h2>&nbsp;대표제품</h2>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;계란용기 석고방향제</p>
              <h1>풍부한 향</h1><h2>&nbsp;그리고</h2>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;독특한 디자인</p> 
            </KorP>
          </TextContainer>
          <Img bkImg={plasterPic} />
        </KorDetails>
      </Content>
    </Container>
  )
}

export default Products;
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

const EngPText = `KANDALA's THE BEST !
= plaster air freshener
FULL OF SCENT
& GOOD FOR HOME`
const KorPText = `
바닷가 사람
물고기 change this 잡아먹구 살구
산꼴엣 사람
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
            <EngP>{EngPText}</EngP>
          </TextContainer>
        </EngDetails>
        <ButtonContainer>
          <Button>More Info</Button>
        </ButtonContainer>
        <KorDetails>
          <TextContainer>
            <KorP>{KorPText}</KorP>
          </TextContainer>
          <Img bkImg={plasterPic} />
        </KorDetails>
      </Content>
    </Container>
  )
}

export default Products;
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import KorP from '../../components/KorP';
import EngP from '../../components/EngP';

import Jumbotron from '../../components/jumbotron';
import bunnyPic from '../../assets/6.jpg'
import plasterPic from '../../assets/1.jpg'
import { Container, Row, Col } from 'reactstrap';

const Header = styled.h2`
  font-family: 'AmaticSC-Bold', serif;
  margin: 0 auto 1rem;
  font-size: 4rem;
  text-align: center;
`
const Content = styled.div`
  width: 100%;
  padding-bottom: 1em;
`

const EngDetails = styled.div`
  display: flex;
`
const KorDetails = styled.div`
  display: flex;
`
const Img = styled.div`
  flex: 1 1 400px;
  background: url("${(props) => props.bkImg }") center center no-repeat;
  background-size: 100%;
  max-width: 450px;
  min-height: 100%;
`
const TextContainer = styled.div`
  flex: 1 1 400px;
`

const ButtonContainer = styled.div`
  margin: .8em 0;
  text-align: right;
`

const EngPText = `LET'S MAKE AIR FRESHENERS
& CANDLES AS A HOBBY!
BE A PROFESSIONAL
WITH KANDALA :)`
const KorPText = `
바닷가 사람
물고기 잡아먹구 살구
산꼴엣 사람
감자 구어먹구 살구
별나라 사람
무얼 먹구 사나.
`


export const Crafts = (props) => {
  return(
    <Container>
      <Jumbotron EngSpan="CRAFTS LESSONS"/>
      <Content>
        <Header>HOBBY, PROFESSIONAL DEVELOPMENT → KANDALA</Header>
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

export default Crafts;
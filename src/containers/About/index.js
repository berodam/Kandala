import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Button from '../../components/Button';
import KorP from '../../components/KorP';
import EngP from '../../components/EngP';

import Jumbotron from '../../components/jumbotron';
import sticker from '../../assets/sticker.jpg'

const Header = styled.h2`
  font-family: 'AmaticSC-Bold', serif;
  margin: 0 auto;
  font-size: 4rem;
  text-align: center;
`
const Content = styled.div`
`

const EngDetails = styled.div`
  display: flex;
  margin: .8em 0;
  padding: .8em 0;
`
const KorDetails = styled.div`
  display: flex;
  margin: .8em 0;
  padding: .8em 0;
`
const Img = styled.img`
  height: 100%;
  margin: 0em;
`
const ButtonContainer = styled.div`
  margin: .8em 0;
`

const EngPText = `KANDALA MAKES 100% HANDMADE scented crafts AND PROVIDES CRAFTS LESSONS TAUGHT IN ENGLISH & KOREAN. What are scented crafts? Air fresheners, candles & perfume.`;
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
          <EngP fontsize={4}>{EngPText}</EngP>
        </EngDetails>
        <ButtonContainer>
          <Button>More Info</Button>
        </ButtonContainer>
        <KorDetails>
          <KorP fontsize={3.5}>{KorPText}</KorP>
          <Img src={sticker} />
        </KorDetails>
      </Content>
    </Container>
  )
}

export default About;
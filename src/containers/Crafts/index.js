import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import KorP from '../../components/KorP';
import EngP from '../../components/EngP';
import Spacer from '../../components/Spacer';
import Jumbotron from '../../components/jumbotron';
import craftsPink from '../../assets/crafts_pink.jpg'
import cinnamon from '../../assets/cinnamon.jpg'
import { Container } from 'reactstrap';

const Header = styled.h2`
  font-family: 'AmaticSC-Bold', serif;
  margin: 0 auto 1rem;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 991px) {
    font-size: 3.5rem;
  }
  @media (max-width: 576px) {
    font-size: 3rem;
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

const EngPText = `LET'S MAKE AIR FRESHENERS
& CANDLES AS A HOBBY!
BE A PROFESSIONAL
WITH KANDALA :)`



export const Crafts = (props) => {
  return(
    <Container>
      <Jumbotron EngSpan="CRAFTS LESSONS"/>
      <Content>
        <Header>HOBBY, PROFESSIONAL DEVELOPMENT → KANDALA</Header>
        <EngDetails>
          <Img bkImg={craftsPink} />
          <TextContainer>
            <EngP fontsize={3}>
              <p><h1>Kandala's</h1></p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;lessons are suited to any skill</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;level from beginner to expert</p>
              <Spacer height={'15px'} />
              <p>&nbsp;&nbsp;Discover a hobby</p>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;as individual as you are.</p>
              <Spacer />
              <p><h2>* English/Korean available</h2></p>
            </EngP>
          </TextContainer>
        </EngDetails>
        <ButtonContainer>
          <a href='https://smartstore.naver.com/kandala'><Button>More Info</Button></a>
        </ButtonContainer>
        <KorDetails>
          <TextContainer>
            <KorP fontsize={3}>              
              <p><h1>칸달라</h1><h2>는</h2></p>
              <p><h2>석고방향제, 캔들, 아로마 관련</h2></p>
              <p>원데이 레슨<h2>과 더불어,</h2></p>
              <Spacer height={'15px'} />
              <p><h2>한국양초공예협회의</h2><h1>양초공예</h1></p>
              <p>지도사과정<h2>을 진행합니다.</h2></p>
              <Spacer />
              <p><h2>* 영어/한국어 가능</h2></p>
            </KorP>
          </TextContainer>
          <Img bkImg={cinnamon} />
        </KorDetails>
      </Content>
    </Container>
  )
}

export default Crafts;
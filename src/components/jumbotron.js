import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import styled from 'styled-components';
import TopLine from './topLine';
import BottomLines from './bottomLines';

const JumbotronFlex = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Wrapper fluid>
          {/* <img src={require('../assets/bouqet_faded_bkg.png')} alt="some alt text"/>  */}
          <TopLine />
          <h1>
            <InlineLogo src={require('../assets/logo.png')} alt='logo.png'/>
            <KorSpan>칸달라</KorSpan>
            <EngSpan>Kandala</EngSpan>
          </h1>
          <BottomLines />
          {/* <p className="lead">Some basic description or tagline goes here. It works in english but it should also work with 한굴</p> */}
        </Wrapper>
      </Jumbotron>
    </div>
  );
}; 

const InlineLogo = styled.img`
  height: 10rem;
`
const EngSpan = styled.span`
  font-family: 'AmaticSC-Bold', serif;
  font-size: 5rem;
  color: #777;
  margin: 0 1rem;
`
const KorSpan = styled.span`
  font-family: 'MSugiJeong', serif;
  font-size: 5rem;
  color: #777;
  margin: 0 1rem;
`
const Wrapper = styled(Container)`
  text-align: center;
`

export default JumbotronFlex;

import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron as JumboReact } from 'reactstrap';
import styled from 'styled-components';
import TopLine from './topLine';
import BottomLines from './bottomLines';

const JumbotronFlex = (props) => {
  return (
    <JumbotronWrapper>
      <Jumbotron fluid>
        <TopLine />
        <ContentWrapper>
          <InlineLogo src={require('../assets/logo.png')} alt='logo.png'/>
          <TextWrapper>
            <KorSpan>{props.KorSpan}</KorSpan>
            <EngSpan>{props.EngSpan}</EngSpan>
          </TextWrapper>
        </ContentWrapper>
        <BottomLines />
      </Jumbotron>
    </JumbotronWrapper>
  );
}; 

const TextWrapper = styled.div`
  margin-bottom: 10px;
`

const Jumbotron = styled(JumboReact)`
  padding: 2rem 1rem;
  margin-bottom: 0 !important;
`

const JumbotronWrapper = styled.div`
  margin: 0 0 0 0;
`

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
const ContentWrapper = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
`
JumbotronFlex.PropTypes = {
  KorSpan: PropTypes.string,
  EngSpan: PropTypes.string,
}

export default JumbotronFlex;

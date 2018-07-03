import React from 'react';
import { Row, Col } from 'reactstrap';
import TopLine from './topLine';
import BottomLines from './bottomLines';
import styled from 'styled-components';
export default class Footer extends React.Component {
    render(){
        return (
        <Wrapper>    
            <TopLine />
            <Row>
            <Col sm="12" md={{ size: 12, offset: 0 }}> <FooterContent>
                <FooterEnglish>SCENTED CRAFTS, CANDLES & LESSONS</FooterEnglish>
                <FooterKorean>석고방향제, 갠들 및 원데이 골래스</FooterKorean>
            </FooterContent></Col>
            </Row>
            <BottomLines/>
        </Wrapper>
    );
  }
}
const Wrapper = styled.div`
    padding-bottom: 10px;
`

const FooterContent = styled.div`
    text-align: center;
    color: #777;    
`
const FooterEnglish = styled.h1`
    font-family: 'AmaticSC-Bold';
`
const FooterKorean = styled.h2`
    font-family: 'MSugiJeong';
`
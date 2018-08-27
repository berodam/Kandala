import React, { Component } from 'react';
// import logo from './assets/logo_transparency.png';
import Navbar from '../../components/navbar';
import ProductCard from '../../components/card';
import Footer from '../../components/footer';
import Jumbotron from '../../components/jumbotron';
import { Container, Row, Col } from 'reactstrap';

// fold should be about 1110x600
// images 1110x480
class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron KorSpan="칸달라" EngSpan="Kandala"/>
        <Row>
          <Col><ProductCard imageSrc='1.jpg' cardTitle='About Kandala' to='#'/></Col>
          <Col><ProductCard imageSrc='2.jpg' cardTitle='Products' to='/products'/></Col>
        </Row>
        <Row>
          <Col><ProductCard imageSrc='4.jpg' cardTitle='Craft Lesons' to='/products'/></Col>
          <Col><ProductCard imageSrc='5.jpg' cardTitle='Korean Lessons' to='/products'/></Col>
          <Col><ProductCard imageSrc='6.jpg' cardTitle='Q & A' to='/products'/></Col>   
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;

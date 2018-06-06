import React, { Component } from 'react';
// import logo from './assets/logo_transparency.png';
import './App.css';
import Navbar from './components/navbar';
import ProductCard from './components/card';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import { Container, Row, Col } from 'reactstrap';

// fold should be about 1110x600
// images 1110x480
class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        {/* <UncontrolledCarousel items={carouselItems}/>         */}
        <Jumbotron />
        <Row>
          <Col><ProductCard imageSrc='1.jpg' cardTitle='About Kandala'/></Col>
          <Col><ProductCard imageSrc='2.jpg' cardTitle='Products'/></Col>
          {/* <Col><ProductCard imageSrc='3.jpg'/></Col>  */}
        </Row>
        <Row>
          <Col><ProductCard imageSrc='4.jpg' cardTitle='Craft Lesons'/></Col>
          <Col><ProductCard imageSrc='5.jpg' cardTitle='Korean Lessons'/></Col>
          <Col><ProductCard imageSrc='6.jpg' cardTitle='Q & A'/></Col>   
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default App;

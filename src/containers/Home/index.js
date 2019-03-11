import React, { Component } from 'react';
import ProductCard from '../../components/card';
import InstaCard from '../../components/InstaCard';
import Footer from '../../components/footer';
import Jumbotron from '../../components/jumbotron';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <Container>
        <Jumbotron KorSpan="칸달라" EngSpan="Kandala"/>
        <Row>
          <Col><ProductCard imageSrc='about.jpg' cardTitle='About Kandala' to='/about'/></Col>
          <Col><ProductCard imageSrc='product.jpg' cardTitle='Products' to='/products'/></Col>
        </Row>
        <Row>
          <Col><ProductCard imageSrc='craft90deg.jpg' cardTitle='Craft Lessons' to='/crafts'/></Col>
          <Col><ProductCard imageSrc='korean_lessons.jpg' cardTitle='Korean Lessons' to='/koreanLessons'/></Col>
          <Col>
            <InstaCard cardTitle='Latest from Kandala' to='https://www.instagram.com/kandala.korea/' />
          </Col>   
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;


import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ProductCard = (props) => {
  let cardTitle = !!props.cardTitle ? props.cardTitle : "Default Title";
  // let cardSubtitle = !!props.cardSubtitle ? props.cardSubtitle : "Default Subtitle is here";
  // const defaultCardText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  // let cardText = !!props.cardText ? props.cardText : defaultCardText;
  // let button = !!props.button ? props.button : "Take me there!";

  // if(!props.Button){
  //   props.cardTitle = "Take me there"
  // }

  const CardWrapper = styled.a`
    margin-bottom: 1rem;
    font-family: 'AmaticSC-Bold', serif;
    border: none;
    background: none;
    padding: 0;
    outline: none;
    display: block;
    button:focus {
      outline: none;
    }
  `
  const Header = styled(CardHeader)`
    font-size: 3rem;
  `
  
  return (
    <CardWrapper>
      <Card>
        <Header>{cardTitle}</Header>
        {/* <CardBody> */}
          {/* <CardSubtitle>{cardSubtitle}</CardSubtitle>
          <CardText>{cardText}</CardText> */}
          {/* <Button>{button}</Button> */}
        {/* </CardBody> */}
        <img top width="100%" src={require('../assets/'+props.imageSrc)} alt={props.imageCaption} />
      </Card>
    </CardWrapper>
  );
};

ProductCard.propTypes = {
  url: PropTypes.string,
  image: PropTypes.string,
  cardTitle: PropTypes.string,
  imageCaption: PropTypes.imageCaption,
};


export default ProductCard;
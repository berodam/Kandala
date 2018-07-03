
import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ProductCard = (props) => {
  const cardTitle = props.cardTitle || "Default Title";

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
  const CardA = styled.a`
    cursor: pointer;
  `
  
  return (
    <CardWrapper>
      <CardA>
        <Card href="">
          <Header>{cardTitle}</Header>
          <img top width="100%" src={require('../assets/'+props.imageSrc)} alt={props.imageCaption} />
        </Card>
      </CardA>
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
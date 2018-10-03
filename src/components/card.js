
import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    & > a {
      text-decoration: none;
    }
  `
  const Header = styled(CardHeader)`
    font-size: 3rem;
    color: #777;
    &:hover {
      text-decoration: none;
      color: #777;
    }
    @media all and (max-width: 1199px) {
      font-size: 2.5em;
    }
  `

  return (
    <CardWrapper>
        <Card >
          <Link to={props.to}><Header>{cardTitle}</Header></Link>
          <img top width="100%" src={require('../assets/'+props.imageSrc)} alt={props.imageCaption} />
        </Card>
    </CardWrapper>
  );
};

ProductCard.propTypes = {
  url: PropTypes.string,
  to: PropTypes.string,
  image: PropTypes.string,
  cardTitle: PropTypes.string,
  imageCaption: PropTypes.imageCaption,
};


export default ProductCard;

import React from 'react';
import { Card, CardHeader } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
 * Just like product card but with embeded instagram instead
 * thanks to snapwidget
 */

//  original widget:
// <!-- SnapWidget -->
// <script src="https://snapwidget.com/js/snapwidget.js"></script>
// <iframe src="https://snapwidget.com/embed/605956" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; ">
// </iframe>
const InstaCard = (props) => {
  const cardTitle = props.cardTitle || "Default Title";
  const Iframe = styled.iframe`
    display: relative;
    border: none;
    overflow: hidden;
    height: 348px;
    @media all and (max-width: 1199px) {
      height: 282px;
    }
    @media all and (max-width: 992px) {
      height: 162px;
      width: auto;
    }
  `;
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
  `;
  const Header = styled(CardHeader)`
    font-size: 3em;
    color: #777;
    &:hover {
      text-decoration: none;
      color: #777;
    }
    @media all and (max-width: 1199px) {
      font-size: 2.5em;
    }
  `;
  const IframeBlocker = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    z-index:2;
  `;

  return (
    <CardWrapper>
        <Card >
          <Header>{cardTitle}</Header>
          <IframeBlocker href={props.to} id="iframeBlocker"></IframeBlocker>
          <Iframe top src="https://snapwidget.com/embed/605956" class="snapwidget-widget" allowtransparency="true" scrolling="no" />
        </Card>
    </CardWrapper>
  );
};

InstaCard.propTypes = {
  url: PropTypes.string,
  to: PropTypes.string,
  cardTitle: PropTypes.string,
  imageCaption: PropTypes.imageCaption,
};

export default InstaCard;
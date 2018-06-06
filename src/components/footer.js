import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
    render(){
        return (
        <Row>
        <Col sm="12" md={{ size: 12, offset: 0 }}> <div class="footer"> Some info about copyright (c) etc.</div></Col>
        </Row>
    );
  }
}


import React, { Fragment } from 'react';
import { Col } from './Grid';
import Card from './Card';
import Loader from './Loader';

//movies that show in row
export default props => (
  <Fragment>
    <Col column='col-1-of-2'>
      {/* <Card> */}
      <Loader />
      {/* </Card> */}
    </Col>
    <Col column='col-1-of-2'>
      {/* <Card> */}
      <Loader />
      {/* </Card> */}
    </Col>
  </Fragment>
);

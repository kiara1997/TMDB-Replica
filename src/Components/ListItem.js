import React from 'react';
import { Col } from './UI/Grid';
import Card from './UI/Card';
import Item from './Item';
import moment from 'moment';

const ListItem = props => {
  const { data, type } = props;
  return data
    .filter(item => item !== null)
    .map((item, i) => (
      console.log("item---", item),
      <Col column='col-1-of-2' key={i}>
        {/* <Card> */}
        <Item {...item} type={type} />
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>{item.original_title ? item.original_title : item.original_name}</div>
        <div style={{ marginTop: '2px', color: 'grey' }}>{moment(item.release_date).format('MMM Do, YYYY')}</div>
        {/* </Card> */}
      </Col>

    ));
};

export default ListItem;

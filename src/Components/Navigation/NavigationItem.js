import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const NavItem = styled.li`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  list-style: none;
  position: relative;
 

  .nav-link :active{
    color: grey;
  }
  .nav-link {
    color: black;
  }
 
  .nav-link:hover {
    border-bottom: 1px solid currentColor;
    background-color: #05c19c;
    border-radius: 10px;
  }
 
`;


const NavigationItem = ({ name, path }) => (
  < NavItem >
    <Link to={`${path}`} className='nav-link'>
      {name}
    </Link>
  </NavItem >
);



NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavigationItem;

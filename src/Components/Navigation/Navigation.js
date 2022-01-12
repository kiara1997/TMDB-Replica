import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Container } from '../UI/Grid';
import NavigationList from './NavigationList';
import image from '../../assets/images/cover.jpeg';

//  background-color: var(--color-bg-2);
// const Nav = styled.nav`
//   position: relative;
//   display: flex;
//   align-items: center;
//   font-family: inherit;
//   font-size: 2.6rem;
//   background-color: black;
//   color: var(--color-white);
//   height: 24.8rem;

//   .container {
//     display: flex;
//     align-items: center;
//   }
// `;

const NavLogo = styled.div`
  font-family: inherit;
  font-size: 4rem;
  margin-right: 1.5rem;
  top: 37px;
  margin-left: 12%;
  position: absolute;

  a:link,
  a:hover,
  a:focus,
  a:visited {
    color: var(--color-green);
    cursor: pointer;
  }
`;
{/* <NavigationList /> */ }
const Navigation = props => (
  <Fragment>

    <div style={{ position: 'relative' }}>
      <img width='100%' src={image} />
      <NavLogo>
        <Link to='/'>TMDB</Link>
      </NavLogo>
    </div>
    {/* <div>
      <Container>
        <NavLogo>
          <Link to='/'>TMDB</Link>
        </NavLogo>
      </Container>
    </div> */}
  </Fragment>
);

export default Navigation;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '../UI/Grid';
import { ReactComponent as SearchIcon } from '../../assets/images/magnifying-glass-browser.svg';

const SectionSearch = styled.div`
  background-color: var(--color-white);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
`;
//form, mentioned top margin-   margin-top: -85px; 
const SearchBox = styled.div`
  width: 100%;

  form {
    position: absolute;
    margin-top: -14%;
  }

  input {
    padding: 2rem;
    padding-left: 6rem;
    border-radius: 2.8rem;
    width: 60pc;
    border: none;
    outline: none;
    color: var(--color-black);
    font-size: 1.8rem;
  }
`;

const SearchIconBox = styled.span`
  position: absolute;
  top: 0;
  left: 10px;
  z-index: 10;
  height: 100%;
  display: flex;
  align-items: center;

  .search-icon-image {
    height: 50%;
    fill: var(--color-text-1);
  }
`;

const Search = ({ handleSubmit, handleChange, value }) => (
  <SectionSearch>
    <SearchBox>
      <Container>
        <form onSubmit={handleSubmit}>
          <SearchIconBox>
            <SearchIcon className='search-icon-image' />
          </SearchIconBox>
          <input
            type='text'
            name='search'
            placeholder='Search for a movie ,tv show, person.....'
            onChange={handleChange}
            value={value}
          />
        </form>
      </Container>
    </SearchBox>
  </SectionSearch>
);

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;

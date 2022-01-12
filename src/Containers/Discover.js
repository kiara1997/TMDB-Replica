import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { Container, Row } from '../Components/UI/Grid';
import Heading from '../Components/UI/Heading';
import SelectList from '../Components/Select/SelectList';
import LoaderList from '../Components/UI/LoaderList';
import ListItem from '../Components/ListItem';
import Pagination from '../Components/Pagination/Pagination';
import Next from '../Components/Pagination/Next';
import Previous from '../Components/Pagination/Previous';
import NavigationList from '../Components/Navigation/NavigationList'

import { getDiscoverMovie, getDiscoverTv } from '../helpers/api';
import { sortByList } from '../shared/List';

class Discover extends Component {
  state = {
    loading: false,
    year: {
      value: `${new Date().getFullYear()}`,
      label: `${new Date().getFullYear()}`,
    },
    sort: {
      value: 'popularity.desc',
      label: 'Popularity Descending',
    },
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  componentDidMount() {
    const { page, year, sort } = queryString.parse(this.props.location.search);
    this.loadData(page, year, sort);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.location.search !== this.props.location.search ||
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      const { page, year, sort } = queryString.parse(
        this.props.location.search,
      );
      this.loadData(page, year, sort);
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  loadData = async (
    toPage = 1,
    year = new Date().getFullYear(),
    sort = 'popularity.desc',
  ) => {
    this.toggleLoading();
    const { type } = this.props.match.params;
    let data;
    if (type === 'movie') {
      data = await getDiscoverMovie(toPage, year, sort);
    }
    if (type === 'tv') {
      data = await getDiscoverTv(toPage, year, sort);
    }
    const selectedSort = sortByList.find(sortItem => sortItem.value === sort);
    this.setState(prevState => ({
      ...this.state,
      ...data,
      loading: !prevState.loading,
      year: { value: `${year}`, label: `${year}` },
      sort: selectedSort,
    }));
  };

  handleSelect = (newValue, name) => {
    const query = queryString.parse(this.props.location.search);
    const { url } = this.props.match;

    this.props.history.push({
      pathname: url,
      search: queryString.stringify({
        ...query,
        page: 1,
        [name]: newValue.value,
      }),
    });
  };

  render() {
    const {
      loading,
      page,
      total_pages,
      total_results,
      results,
      year,
      sort,
    } = this.state;
    const { url } = this.props.match;
    const { type } = this.props.match.params;
    // document.title = 'TMDB  | Discover';
    return (
      <section className='list-item'>
        <Container>
          <div style={{ display: "flex" }}>
            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
              What's Popular
            </div>
            <div style={{ border: '1px solid', borderRadius: '15px', marginLeft: '20px' }}>
              <NavigationList />
            </div>
          </div>
          <Row>
            {loading ? <LoaderList /> : <ListItem data={results} type={type} />}
          </Row>
        </Container>
        <Pagination
          currentPage={page}
          totalPages={total_pages}
          totalResults={total_results}
        >
          <Previous
            to={{
              pathname: url,
              search: `?page=${page - 1}&year=${year.value}&sort=${sort.value
                }`,
            }}
            currentPage={page}
          />
          <Next
            to={{
              pathname: url,
              search: `?page=${page + 1}&year=${year.value}&sort=${sort.value
                }`,
            }}
            currentPage={page}
            lastPages={total_pages}
          />
        </Pagination>

      </section>
    );
  }
}

export default withRouter(Discover);

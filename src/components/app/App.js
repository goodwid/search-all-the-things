import React, { Component } from 'react';
import styles from './App.css';
import { search } from '../../services/omdbapi';
import Paging from '../paging/Paging';
import Results from '../movies/Results';
import Search from '../search/Search';

export default class App extends Component {

  state = {
    loading: false,
    totalResults: 0,
    page: 1,
    movies: [],
    searchParam: '',
    error: null
  };

  searchMovies = () => {
    const { searchParam, page } = this.state;
    this.setState({ loading: true });

    search({ searchParam, page })
      .then(({ movies, totalResults }) => {
        this.setState({ movies, totalResults });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handleSearch = ({ search }) => {
    this.setState({ searchParam: search }, this.searchMovies);
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchMovies);
  };
  
  render() {
    const { movies, loading, totalResults, page, error } = this.state;
    return (
      <div>
        <header>
          <h1>OMDB Movie search</h1>
          <div className="search-container">
            <Search onSearch={this.handleSearch} />
          </div>
        </header>
        <main>
          <section className="notifications">
            {loading && <div>Loading . . .</div>}
            {error && <div>Whoops!  broken... {error}</div>}
          </section>
          <section>
            <Paging
              totalResults={totalResults}
              page={page}
              onPage={this.handlePage} />
            <Results movies={movies} />
          </section>
        </main>
      </div> 
    );
  }
}
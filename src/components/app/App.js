import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import styles from './App.css';
import { search } from '../../services/omdbapi';
import Header from './Header';
import Home from './Home';
import About from './About';

import Search from '../search/Search';
import MovieDetail from '../movies/MovieDetail';

export default class App extends Component {

  state = {
    loading: false,
    totalResults: 0,
    page: 1,
    movies: [],
    searchParam: '',
    error: null
  };

  // searchMovies = () => {
  //   const { searchParam, page } = this.state;
  //   this.setState({ loading: true });

  //   search({ searchParam, page })
  //     .then(({ movies, totalResults }) => {
  //       this.setState({ movies, totalResults });
  //     }, error => {
  //       this.setState({ error });
  //     })
  //     .then(() => this.setState({ loading: false }));
  // };

  // handleSearch = ({ search }) => {
  //   this.setState({ searchParam: search }, this.searchMovies);
  // };

  // handlePage = ({ page }) => {
  //   this.setState({ page }, this.searchMovies);
  // };
  
  render() {
    
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/search" component={Search} />
              <Route path="/movies/:id" render={({ match, history }) => {
                return <MovieDetail imdbID={match.params.id} history={history} />;
              }} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
    
// const { movies, loading, totalResults, page, error } = this.state;
// return (
//   <div>
//     <header>
//       <h1>OMDB Movie search</h1>
//       <div className="search-container">
//         <Search onSearch={this.handleSearch} />
//       </div>
//     </header>
//     <main>
//       <section className="notifications">
//         {loading && <div>Loading . . .</div>}
//         {error && <div>Whoops!  broken... {error}</div>}
//       </section>
//       <section>
//         <Paging
//           totalResults={totalResults}
//           page={page}
//           onPage={this.handlePage} />
//         <Results movies={movies} />
//       </section>
//     </main>
//   </div> 
// );
  
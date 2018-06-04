import React, { Component } from 'react';
import Movie from './Movie';
import styles from './Results.css';

export default class Results extends Component {

  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie} />
        ))}
      </ul>
    );
  }
}
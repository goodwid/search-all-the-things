import React, { Component } from 'react';
import Movie from './Movie';

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
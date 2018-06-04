import React, { Component } from 'react';
import './Movie.css';

export default class Movie extends Component {

  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props.movie;
    const url = `https://www.imdb.com/title/${imdbID}/`;

    return (
      <li>
        <h2><a href={url} target="_blank">{Title}</a></h2>
        <h4>A {Type} released in {Year}</h4>
        {Poster !== 'N/A' && <img className="poster" src={Poster} />}
      </li>
    );
  }
}
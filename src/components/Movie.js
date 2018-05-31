import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props.movie;
    const url = `https://www.imdb.com/title/${imdbID}/`;

    return (
      <li>
        <h2><a href={url} target="_blank">{Title}</a></h2>
        <h4>a {Type} Released in {Year}</h4>
        <img className="poster" src={Poster} />
      </li>
    );
  }
}
import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  
  state = {
    search: ''
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();https://goodwid.github.io/search-all-the-things/
    this.props.onSearch(this.state);
  };

  render() {
    const { search } = this.state;

    return (
      <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search Movies:&nbsp;
          <input value={search} onChange={this.handleChange} />
        </label>
        <button>Go!</button>
      </form>
    );
  }
}
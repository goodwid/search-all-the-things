import React, { Component } from 'react';

export default class Paging extends Component {

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalResults, page } = this.props;
    
    if(!totalResults) return <div>No results found, try another search</div>;

    const totalPages = Math.ceil(totalResults / 10); // OMDB hard codes paging to 10 per.
    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt;-- Prev</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>Next --&gt;</button>
      </div>
    );
  }
}
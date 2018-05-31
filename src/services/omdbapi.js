import request from 'superagent';

const key = '948ccddb';
const baseURI = `http://www.omdbapi.com/?apikey=${key}&`;

export function search({ searchParam, page }) {

  const searchURI = `s=${searchParam}&page=${page}`;
  const URI = baseURI + searchURI;
  return request.get(URI)
    .then(response => {
      
      return { movies: response.body.Search, totalResults: response.body.totalResults };
    });
}


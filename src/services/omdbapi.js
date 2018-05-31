import dotenv from 'dotenv';
import request from 'superagent';

dotenv.config('../../.env');

const APIKey = process.env.OMDB_APIKEY
const baseURI = `http://www.omdbapi.com/?apikey=${APIkey}&`;


export function search({ topic, page = 1 }) {
  const searchURI = `s=${topic}&page=${page}`;
  const URI = baseURI + searchURI;
  return request.get(URI);
}


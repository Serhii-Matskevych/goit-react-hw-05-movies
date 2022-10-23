import axios from 'axios';

// Ключ API (v3 auth)
// c98b6ba13627c0ee26c9ebb0229dfccc
// Ключ доступа к API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOThiNmJhMTM2MjdjMGVlMjZjOWViYjAyMjlkZmNjYyIsInN1YiI6IjYzMDhmMzIzY2E3ZWM2MDA5MjQ3MDA0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._WlaFlENGwTPpAy3F1zrzMwJQIm_wiG9jWxHPALqiIw
//
const API_KEY = 'c98b6ba13627c0ee26c9ebb0229dfccc';
const LANGUAGE = 'ru-RU';
const QUERY = 'q';
// const QUERY = '00000000000000000000000000'; // zero found
const PAGE = 1; // minimum: 1 maximum: 1000 default: 1 optional
const INCLUDE_ADULT = true;

// const DEFAULT_ROUTE = 'trending/all/day'; // /trending/all/day

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.headers.common['x-api-key'] = API_KEY;

export const getMoviesList = params => {
  const {
    page = PAGE,
    query = QUERY,
    include_adult = INCLUDE_ADULT,
    language = LANGUAGE,
  } = params;

  // search
  const queryString = `search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=${language}include_adult=${include_adult}`;

  return axios.get(queryString);
};

export const getTrendigsList = () => {
  return axios.get(`trending/movie/week?api_key=${API_KEY}`);
  // return axios.get(`trending/movie/week`);
};

export const getMoviesInfo = params => {
  const { id: movie_id, language = LANGUAGE } = params;
  return axios.get(
    `/movie/${movie_id}?api_key=${API_KEY}&language=${language}`
  );
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export const getMoviesCast = params => {
  const { id: movie_id, language = LANGUAGE } = params;
  return axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}&language=${language}`
  );
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export const getMoviesReview = params => {
  const { id: movie_id, language = LANGUAGE } = params;
  return axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=${language}`
  );
};

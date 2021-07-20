import axios from 'axios';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key : "9db98926810069b9a51ddf3080645e7d",
    language: "en-US"
  }
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: id => api.get(`movie/${id}`, {
    params: {
      append_to_respone: "videos"
    }
  }),
  search: term => api.get("search/movie", {
    params: {
      query: encodeURIComponent(term)
    }
  })
}

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvShowDetail: id => api.get(`tv/${id}`, {
    params: {
      append_to_respone: "videos"
    }
  }),
  search: term => api.get("search/tv", {
    params: {
      query: encodeURIComponent(term)
    }
  })
}
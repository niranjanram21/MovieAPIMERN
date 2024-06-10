import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY, TMDB_BASE_URL } from '../utils/constants';
import fetchTrailer from '../utils/fetchTrailer';

// Async thunks for fetching data from TMDB
export const fetchStrangerThingsTrailer = createAsyncThunk(
  'movies/fetchStrangerThingsTrailer',
  async () => {
    const trailerUrl = await fetchTrailer(66732, 'tv');
    return trailerUrl;
  }
);

export const fetchTrending = createAsyncThunk(
  'movies/fetchTrending',
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/trending/all/week?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchNewReleases = createAsyncThunk(
  'movies/fetchNewReleases',
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/now_playing?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchBlockbusterMovies = createAsyncThunk(
  'movies/fetchBlockbusters',
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    return response.data.results.filter((movie) => movie.vote_average > 8);
  }
);

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopular',
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTopRated',
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/tv/top_rated?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

// Async thunk to fetch trailers for each movie or TV show
export const fetchTrailers = createAsyncThunk(
  'movies/fetchTrailers',
  async (movies) => {
    const trailers = await Promise.all(
      movies.map(async (movie) => {
        const type = movie.media_type === 'tv' ? 'tv' : 'movie';
        const trailerUrl = await fetchTrailer(movie.id, type);
        return { ...movie, trailerUrl };
      })
    );
    return trailers;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    trending: [],
    newReleases: [],
    blockbusters: [],
    popular: [],
    trailerLink: null,
    topRated: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trending = action.payload;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchNewReleases.fulfilled, (state, action) => {
        state.newReleases = action.payload;
      })
      .addCase(fetchBlockbusterMovies.fulfilled, (state, action) => {
        state.blockbusters = action.payload;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popular = action.payload;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRated = action.payload;
      })
      .addCase(fetchStrangerThingsTrailer.fulfilled, (state, action) => {
        state.trailerLink = action.payload;
      })
      .addCase(fetchTrailers.fulfilled, (state, action) => {
        const { trending, newReleases, blockbusters, popular, topRated } = action.payload;
        state.trending = trending;
        state.newReleases = newReleases;
        state.blockbusters = blockbusters;
        state.popular = popular;
        state.topRated = topRated;
      });
  },
});

export default movieSlice.reducer;

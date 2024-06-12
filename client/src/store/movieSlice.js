import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import fetchTrailer from "../utils/fetchTrailer";

// Async thunks for fetching data from TMDB
export const fetchStrangerThingsTrailer = createAsyncThunk(
  "movies/fetchStrangerThingsTrailer",
  async () => {
    const trailerUrl = await fetchTrailer(66732, "tv");
    return trailerUrl;
  }
);

export const fetchTrending = createAsyncThunk(
  "movies/fetchTrending",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/trending/all/week?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchNewReleases = createAsyncThunk(
  "movies/fetchNewReleases",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/now_playing?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchBlockbusterMovies = createAsyncThunk(
  "movies/fetchBlockbusters",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    return response.data.results.filter((movie) => movie.vote_average > 8);
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopular",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

// TV Shows
export const fetchTopRatedTV = createAsyncThunk(
  "movies/fetchTopRated",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/tv/top_rated?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchAiringTodayTV = createAsyncThunk(
  "movies/fetchArrivingTodayTV",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/tv/airing_today?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchOnTheAirTV = createAsyncThunk(
  "movies/fetchOnTheAirTV",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/tv/on_the_air?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

export const fetchPopularTV = createAsyncThunk(
  "movies/fetchPopularTV", // Corrected thunk name
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/tv/popular?api_key=${API_KEY}`
    );
    return response.data.results;
  }
);

// Individual Movie Detail
export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (movieId) => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  }
);

// Search Query
export const fetchSearchResults = createAsyncThunk(
  "movies/fetchSearchResults",
  async ({ query, type }) => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`
    );
    return { results: response.data.results, type };
  }
);

// Genre Queries
export const fetchMovieGenres = createAsyncThunk(
  "movies/fetchMovieGenres",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    return response.data.genres;
  }
);

export const fetchTVGenres = createAsyncThunk(
  "movies/fetchTVGenres",
  async () => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/genre/tv/list?api_key=${API_KEY}`
    );
    return response.data.genres;
  }
);

export const fetchTVShowsByGenre = createAsyncThunk(
  "movies/fetchTVShowsByGenre",
  async (genreId) => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}`
    );
    return response.data.results;
  }
);

export const fetchMoviesByGenre = createAsyncThunk(
  "movies/fetchMoviesByGenre",
  async (genreId) => {
    const response = await axios.get(
      `${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trending: [],
    newReleases: [],
    blockbusters: [],
    popular: [],
    trailerLink: null,
    topRated: [],
    airingTodayTV: [],
    onTheAirTV: [],
    popularTV: [],
    movieDetails: {},
    searchResults: {
      movies: [],
      tvShows: [],
      people: [],
    },
    movieGenres: [],
    tvGenres: [],
    moviesByGenre: [],
    tvShowsByGenre: [],
    status: "idle",
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.trending = action.payload;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.status = "failed";
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
      .addCase(fetchTopRatedTV.fulfilled, (state, action) => {
        state.topRated = action.payload;
      })
      .addCase(fetchAiringTodayTV.fulfilled, (state, action) => {
        state.airingTodayTV = action.payload;
      })
      .addCase(fetchOnTheAirTV.fulfilled, (state, action) => {
        state.onTheAirTV = action.payload;
      })
      .addCase(fetchPopularTV.fulfilled, (state, action) => {
        state.popularTV = action.payload;
      })
      .addCase(fetchStrangerThingsTrailer.fulfilled, (state, action) => {
        state.trailerLink = action.payload;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { results, type } = action.payload;
        if (type === "movie") {
          state.searchResults.movies = results;
        } else if (type === "tv") {
          state.searchResults.tvShows = results;
        } else if (type === "person") {
          state.searchResults.people = results;
        }
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchMovieGenres.fulfilled, (state, action) => {
        state.movieGenres = action.payload;
      })
      .addCase(fetchTVGenres.fulfilled, (state, action) => {
        state.tvGenres = action.payload;
      })
      .addCase(fetchMoviesByGenre.fulfilled, (state, action) => {
        state.moviesByGenre = action.payload;
      })
      .addCase(fetchTVShowsByGenre.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTVShowsByGenre.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tvShowsByGenre = action.payload; // Ensure this updates correctly
      })
      .addCase(fetchTVShowsByGenre.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;

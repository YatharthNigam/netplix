import { configureStore } from '@reduxjs/toolkit';

import { tmdbApi } from '../services/TMDB';
import genreOrCatgoryReducer from '../features/currentGenreOrCategory';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCatgoryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

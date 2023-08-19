import sessionReducer from "./session/sessionSlice";
import { configureStore } from "@reduxjs/toolkit";
import { comicApi } from "./services/comicApi";
import { marvelApi } from "./services/marvelApi";

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    [marvelApi.reducerPath]: marvelApi.reducer,
    [comicApi.reducerPath]: comicApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      comicApi.middleware,
      marvelApi.middleware
    );
  },
});

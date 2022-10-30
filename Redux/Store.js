import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./Slices/FavoriteSlice";
export const store = configureStore({ reducer: { favoriteReducer } });

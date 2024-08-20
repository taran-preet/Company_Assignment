//Mam-Sir i have also added a photos folder-->Do go through it for a reference of application
import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countriesSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

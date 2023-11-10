import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slice/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
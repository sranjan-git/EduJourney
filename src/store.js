import { configureStore } from '@reduxjs/toolkit';
import coursesReducer from './reducers/coursesReducer';

const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;

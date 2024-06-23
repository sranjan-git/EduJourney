// // New way with configureStore
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';

// const store = configureStore({
//   reducer: rootReducer
// });

// export default store;


// src/store.js

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import coursesReducer from "./reducers/coursesReducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

const store = createStore(rootReducer);

export default store;

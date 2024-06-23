import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import 'bootstrap/dist/css/bootstrap.min.css';


const rootReducer = combineReducers({
  courses: coursesReducer,
});

export default rootReducer;

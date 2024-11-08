import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./course/modules/reducer";
import accountReducer from "./acount/reducer";
import AssignmentReducer from "./course/assigments/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    AssignmentReducer,
  },
});
export default store;

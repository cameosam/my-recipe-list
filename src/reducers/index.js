import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import recipeReducer from "./recipeReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  recipes: recipeReducer,
});

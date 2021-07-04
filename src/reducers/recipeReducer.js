import _ from "lodash";
import {
  FETCH_RECIPE,
  FETCH_RECIPES,
  FETCH_MYRECIPES,
  CREATE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
} from "../actions/types";

const recipeReducer = (state = { allRecipes: [], myRecipes: [] }, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, allRecipes: _.mapKeys(action.payload, "_id") };
    case FETCH_MYRECIPES:
      return { ...state, myRecipes: _.mapKeys(action.payload, "_id") };
    case FETCH_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_RECIPE:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_RECIPE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default recipeReducer;

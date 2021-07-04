import axios from "axios";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_RECIPE,
  FETCH_RECIPES,
  FETCH_MYRECIPES,
  FETCH_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
} from "./types";

const recipes = axios.create({
  baseURL: "http://localhost:5000",
});

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createRecipe = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await recipes.post("/recipes/create", {
    ...formValues,
    userId,
  });
  dispatch({ type: CREATE_RECIPE, payload: response.data });
  history.push("/recipes");
};

export const fetchRecipes = () => async (dispatch) => {
  const response = await recipes.get("/recipes");
  dispatch({ type: FETCH_RECIPES, payload: response.data });
};

export const fetchMyRecipes = (userId) => async (dispatch) => {
  const response = await recipes.get(`/recipes/user/${userId}`);
  dispatch({ type: FETCH_MYRECIPES, payload: response.data });
};

export const fetchRecipe = (id) => async (dispatch) => {
  const response = await recipes.get(`/recipes/${id}`);
  dispatch({ type: FETCH_RECIPE, payload: response.data });
};

export const editRecipe = (id, formValues) => async (dispatch) => {
  const response = await recipes.patch(`/recipes/edit/${id}`, formValues);
  dispatch({ type: EDIT_RECIPE, payload: response.data });
  history.push("/recipes");
};

export const deleteRecipe = (id) => async (dispatch) => {
  await recipes.delete(`/recipes/delete/${id}`);
  dispatch({ type: DELETE_RECIPE, payload: id });
  history.push("/recipes");
};

import React from "react";
import { Router, Route } from "react-router-dom";
import Create from "./recipes/Create";
import AllRecipes from "./recipes/AllRecipes";
import MyRecipes from "./recipes/MyRecipes";
import Edit from "./recipes/Edit";
import Delete from "./recipes/Delete";
import ShowRecipe from "./recipes/ShowRecipe";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <div className="ui segment">
          <Route path="/" exact component={AllRecipes} />
          <Route path="/recipes/" exact component={MyRecipes} />
          <Route path="/recipes/create" exact component={Create} />
          <Route path="/recipes/edit/:id" exact component={Edit} />
          <Route path="/recipes/delete/:id" exact component={Delete} />
          <Route path="/recipes/show/:id" exact component={ShowRecipe} />
        </div>
      </Router>
    </div>
  );
};

export default App;

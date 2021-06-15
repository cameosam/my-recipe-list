import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div>
      <div className="ui huge borderless secondary menu">
        <Link to="/" className="header item">
          MyRecipeList
        </Link>
        <div className="right menu">
          <Link to="/recipes" className="item">
            My Recipes
          </Link>
          <Link to="/" className="item">
            Community Recipes
          </Link>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};
export default Header;

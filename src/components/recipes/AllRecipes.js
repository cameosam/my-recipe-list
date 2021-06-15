import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRecipes } from "../../actions";

class AllRecipes extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }
  renderAdmin(recipe) {
    if (recipe.userId === this.props.currentUserId) {
      return (
        <div className="right floated content" data-tooltip="Added by you">
          <i className="big check icon" />
        </div>
      );
    }
  }
  renderList() {
    const filtered = this.props.recipes.filter((recipe) => recipe.title);
    return filtered.map((recipe) => {
      return (
        <div className="item" key={recipe._id}>
          {this.renderAdmin(recipe)}
          <div className="left floated content">
            <Link
              to={`/recipes/${recipe._id}`}
              className="ui icon basic button"
            >
              <i className="large icon sticky note outline" />
            </Link>
          </div>
          <div className="content">
            {recipe.title}
            <a
              href={recipe.source}
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              {recipe.source}
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Community Recipes</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: Object.values(state.recipes),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchRecipes })(AllRecipes);

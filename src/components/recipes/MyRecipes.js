import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMyRecipes } from "../../actions";

class MyRecipes extends React.Component {
  componentDidMount() {
    this.props.fetchMyRecipes(this.props.currentUserId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUserId !== prevProps.currentUserId) {
      this.props.fetchMyRecipes(this.props.currentUserId);
    }
  }

  renderAdmin(recipe) {
    if (recipe.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/recipes/edit/${recipe._id}`} className="ui button">
            Edit
          </Link>
          <Link
            to={`/recipes/delete/${recipe._id}`}
            className="ui negative button"
          >
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    if (this.props.isSignedIn) {
      return this.props.recipes.map((recipe) => {
        return (
          <div className="item" key={recipe._id}>
            {this.renderAdmin(recipe)}
            <div className="left floated content">
              {/* <Link
                to={`/recipes/show/${recipe._id}`}
                className="ui icon basic button"
              >
                <i className="large icon sticky note outline" />
              </Link> */}
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
    } else {
      return <div>Please sign in to view your recipes!</div>;
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="recipes/create" className="ui button fluid primary">
            Add new recipe
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>My Recipes</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: Object.values(state.recipes.myRecipes),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchMyRecipes })(MyRecipes);

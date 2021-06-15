import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../actions/index";
import RecipeForm from "./RecipeForm";

class Create extends React.Component {
  onSubmit = (formValues) => {
    this.props.createRecipe(formValues);
  };

  render() {
    return (
      <div>
        <h3>Add a new recipe</h3>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createRecipe })(Create);

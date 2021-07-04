import React from "react";
import { connect } from "react-redux";
import Modal from "../Modal";
import history from "../../history";
import { fetchRecipe } from "../../actions";

class ShowRecipe extends React.Component {
  componentDidMount() {
    this.props.fetchRecipe(this.props.match.params.id);
  }

  renderNotes() {
    if (!this.props.recipe.notes) {
      return;
    }
    return `Notes: ${this.props.recipe.notes}`;
  }

  render() {
    return (
      <Modal
        title={this.props.recipe.title}
        content={
          <div>
            <div>
              Source:{" "}
              <a
                href={this.props.recipe.source}
                target="_blank"
                rel="noreferrer"
              >
                {this.props.recipe.source}
              </a>
            </div>
            <div>{this.renderNotes()}</div>
          </div>
        }
        onDismiss={() => history.push("/recipes")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe: state.recipes.allRecipes[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchRecipe })(ShowRecipe);

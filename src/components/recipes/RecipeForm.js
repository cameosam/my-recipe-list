import React from "react";
import { Field, reduxForm } from "redux-form";
import validator from "validator";

class RecipeForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Recipe title" />
        <Field
          name="source"
          component={this.renderInput}
          label="Recipe source"
        />
        <Field name="notes" component={this.renderInput} label="Recipe notes" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.source) {
    errors.source = "You must enter a URL";
  } else if (!validator.isURL(formValues.source)) {
    errors.source = "You must enter a valid URL";
  }

  return errors;
};

export default reduxForm({
  form: "RecipeForm",
  validate,
})(RecipeForm);

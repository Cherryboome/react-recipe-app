import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    return (
      <>
        <h1>All Recipes will be displayed on this page!</h1>
        <RecipeSearch />
        <Recipe />
      </>
    );
  }
}

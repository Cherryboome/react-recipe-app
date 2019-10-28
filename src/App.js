import React from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <RecipeList />
      <RecipeDetails />
    </>
  );
}

export default App;

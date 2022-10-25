import React from "react";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

export default function RecipeList({ recipes, setRecipes }) {
  return (
    <div className="card-holder">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.uuid} recipe={recipe} recipes={recipes} setRecipes={setRecipes} />
      ))}
    </div>
  );
}

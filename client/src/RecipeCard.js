import React from "react";
import "./RecipeCard.css";
import Favorite from "./Favorite";

export default function RecipeCard({ recipe, recipes, setRecipes }) {
  return (
    <div className="card">
      <div className="card-header">
        <div>{recipe.name}</div>
        <Favorite setRecipes={setRecipes} recipes={recipes} recipe={recipe} />
      </div>
      <div>
        <img src={recipe.images[0]} alt={recipe.name}></img>
        <div className="card-description">{recipe.description}</div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/API/recipes`)
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);
  // console.log(recipes);

  return <RecipeList recipes={recipes} setRecipes={setRecipes} />;
}

export default App;

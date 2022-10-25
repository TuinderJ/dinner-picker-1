const express = require("express");
const cors = require("cors");
const fs = require("fs");
const recipesData = require("./db/recipes.json");

const app = express();
const port = 3000;

const saveJSON = data => fs.writeFile(`./db/recipes.json`, JSON.stringify(data, null, 2), err => console.log(err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/API/recipes", (req, res) => res.json(recipesData));

app.put("/API/recipe/:uuid", (req, res) => {
  recipesData.forEach((recipe, index) => {
    if (recipe.uuid === req.params.uuid) {
      recipesData[index] = { ...req.body };
    }
  });
  saveJSON(recipesData);
  res.json(req.body);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

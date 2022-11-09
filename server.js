const express = require('express')
const app = express()
require("dotenv").config();
const {PORT} = process.env || 8000;
const recipesRoutes = require("./routes/recipesRoutes");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/images", express.static("./public/images"));

app.use("/recipes", recipesRoutes)

app.listen(PORT, ()=>{console.log(`Server listening on port ${PORT}`)})
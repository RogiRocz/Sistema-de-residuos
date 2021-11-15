const express = require("express");
const app = express();
const cors = require("cors")
const indexRoute = require("./src/Routes/indexRoute")
const graphPopRoute = require("./src/Routes/GraphPop")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("./src/Pages"))
app.use(cors())

app.use("/", indexRoute)
app.use("/", graphPopRoute)
app.listen(8080);

console.log("Server is running!");
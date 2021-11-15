const express = require("express")
const path = require("path")
const route = express.Router()

// Isso tem que está nos service
function estimativa({ year, pop, howYears }) {
    year = parseInt(year)
    pop = parseInt(pop)
    howYears = parseInt(howYears)
    const kg = (Math.log(9612) - Math.log(7746)) / (2010 - 2000)

    let variableYear = year + 1;
    let estimate = {};
    estimate[year] = pop
    while (variableYear <= year + howYears) {
        estimate[variableYear] = parseInt(Math.round(pop * Math.exp(kg * (variableYear - year))));
        variableYear++;
    }

    return estimate;
}

route.get("/GraphPop", (req, res) => {
    console.log(req);
    res.sendFile(path.join(__dirname + "/../Pages/GraphPop.html"))
})

route.post("/GraphPop", (req, res) => {
    const result = estimativa(req.body)
    res.send(result)
})

module.exports = route
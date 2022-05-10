const express = require("express");
const { calculate } = require("./calculate");
const app = express();
const port = 4000;

app.get('/calc', (req, res) => {
    let value1 = parseInt(req.query.value1);
    let value2 = parseInt(req.query.value2);
    let operator = req.query.operator;
    calculate(value1, value2, operator);
    res.send(calculate.result);
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
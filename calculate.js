function calculate(value1, value2, operator) {
    let result;
    switch (operator) {
        case 'plus': result = value1 + value2; break;
        case 'minus': result = value1 - value2; break;
        case 'multiply': result = value1 * value2; break;
        case 'divide': result = value1 / value2; break;
    }
    console.log(result);
    return result;
}

module.exports = { calculate }
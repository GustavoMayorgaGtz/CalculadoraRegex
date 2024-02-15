const CalculatorExpression = require("./calculatorExpression");

// const formula = "((250-175)-(157-567))";// Resultado 485
//const formula = "(10+5)*3/2"; // R esultado 22.5
// const formula = "(10+5)*3/2+2*50"; //Resultado 122.5
//const formula = "((16+15)*23+5)/2"; //Resultado 359
//const formula = "((12+8)-(5*3))/2"; // Resultado 2.5
// const formula = "(30-5)*(6/2)";// Resultado 75
//const formula = "((40+10)-(8+2))"; // Resultado 40
//const formula = "((20-8)*(15+5))/4"; //Resultado 60
//const formula = "((100-25)-(8+2))"; // Resultado: 65
//const formula= "(15*4)+(3/2)"; // Resultado: 61.5
//const formula = "5^2"; //25
//const formula = "(             5 ^ 2 ) ^ 2";//625
//const formula = "5*(45*3+6)-87*(9/5)"; //resultado 548.4
const formula = "(4/4)";// Resultado -15.9

//formulas malas
// const formula = "(10^2)5";
const calculadora = new CalculatorExpression(formula);


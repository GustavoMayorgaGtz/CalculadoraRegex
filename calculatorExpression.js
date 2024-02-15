class CalculatorExpression {

    operatorsArr = [];
    /**
     * 
     * @param {string} expresion //expresion usada para parsear la informacion
     */
    constructor(expresion) {
        this.expresion = expresion.replaceAll(" ", "");
        this.separarDelimitadores();
    }


    /**
     * Funcion para separar la expresion por operadores y numeros y crear la materia prima
     */
    separarDelimitadores() {
        const expresionArr = this.expresion.split("");

        const delimitadores = /[()\+\-\*\/&\^]/;

        const numerosArr = this.expresion.split(delimitadores).filter((char => {
            if (char.length >= 1) {
                return char
            }
        }));

        const operadoresArr = [];
        const operadoresSinParentesis = [];

        expresionArr.forEach((char) => {
            if (char === "(" || char === ")" || char === "+" || char === "-" || char === "*" || char === "/" || char === "%" || char === "^") {
                operadoresArr.push(char);
            }
        })

        expresionArr.forEach((char) => {
            if (char === "+" || char === "-" || char === "*" || char === "/" || char === "%" || char === "^") {
                operadoresSinParentesis.push(char);
            }
        })

        //Verificar si hay un error
        if (operadoresSinParentesis.length == numerosArr.length - 1) {
            //Materia prima 
            console.log("Materia prima");
            console.log("Tamaño de operadores: ",operadoresArr.length,  operadoresArr);
            console.log("Tamaño de numeros: ",numerosArr.length,  numerosArr);
            this.escaneoJerarquia(operadoresArr, numerosArr)
        } else {
            console.log("Hay un error en esta madre");
        }
    }


    /**
     * Funcion que reliza las operaciones por orden de jearquia
     * @param {string[]} operadores 
     * @param {number[]} numeros 
     */
    escaneoJerarquia(operadores, numeros) {
        let cola_operadores = []; //los operadores que van a ser usados
        let parentesis_inicio = 0;
        let parentesis_fin = 0;
        let estaCerrado = false;
        let idx = 0;
        let size = operadores.length;
        let recorrer = 0;

        while (!estaCerrado) {
            const operador = operadores[idx];
            if (operador == "(") {
                cola_operadores = [];
                operadores.forEach((operador, i) => {
                    if (operador.match(/[\+\-\*\/&\^]/) && i < idx) {
                        recorrer++;
                    }
                })
                parentesis_inicio = idx;
            } else if (operador == ")") {
                estaCerrado = true;
                parentesis_fin = idx;
            } else {
                cola_operadores.push(operador);
            }
            if (idx == (size - 1)) {
                estaCerrado = true;
            }
            idx++;
        }
        let x;
        let exit = true;
        while (exit) {
            if (cola_operadores.includes("^")) {
                const index_operador = cola_operadores.indexOf("^");
                cola_operadores.splice(index_operador, 1);
                const p1 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const p2 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const resultado = p1 ** p2;
                numeros.splice(index_operador + recorrer, 0, resultado);
            } else if (cola_operadores.includes("*")) {
                const index_operador = cola_operadores.indexOf("*");
                cola_operadores.splice(index_operador, 1);
                const p1 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const p2 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const resultado = p1 * p2;
                numeros.splice(index_operador + recorrer, 0, resultado);
            } else if (cola_operadores.includes("/")) {
                const index_operador = cola_operadores.indexOf("/");
                cola_operadores.splice(index_operador, 1);
                const p1 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const p2 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const resultado = p1 / p2;
                numeros.splice(index_operador + recorrer, 0, resultado);
            } else if (cola_operadores.includes("+")) {
                const index_operador = cola_operadores.indexOf("+");
                cola_operadores.splice(index_operador, 1);
                const p1 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const p2 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const resultado = p1 + p2;
                numeros.splice(index_operador + recorrer, 0, resultado);
            } else if (cola_operadores.includes("-")) {
                const index_operador = cola_operadores.indexOf("-");
                cola_operadores.splice(index_operador, 1);
                const p1 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const p2 = parseFloat(numeros.splice(index_operador + recorrer, 1)[0]);
                const resultado = p1 - p2;
                numeros.splice(index_operador + recorrer, 0, resultado);
            }
            if (cola_operadores.length == 0) {
                const elementosSize = (parentesis_fin - parentesis_inicio) + 1;
                operadores.splice(parentesis_inicio, elementosSize);
                exit = false;
                if (operadores.length > 0 && numeros.length > 1) {
                    this.escaneoJerarquia(operadores, numeros);
                } else {
                    console.log("Resultado: ", numeros[0])
                }
            }
        }
    }
}

module.exports = CalculatorExpression;

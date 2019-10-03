function calculator(string) {
    var stack = [], arrayOfInput = string.split(' ')
    if (arrayOfInput.length === 1) {
        return string;
    } else {
        var data, variable1, variable2;
        arrayOfInput.forEach(v => {
            switch (v) {
                case "+":
                    variable2 = stack.pop();
                    variable1 = stack.pop();
                    data = add(variable1, variable2);
                    stack.push(data);
                    break;
                case "-":
                    variable2 = stack.pop();
                    variable1 = stack.pop();
                    data = substract(variable1, variable2);
                    stack.push(data);
                    break;
                case "*":
                    variable2 = stack.pop();
                    variable1 = stack.pop();
                    data = multiplication(variable1, variable2);
                    stack.push(data);
                    break;
                case "/":
                    variable2 = stack.pop();
                    variable1 = stack.pop();
                    data = division(variable1, variable2);
                    stack.push(data);
                    break;
                case "sin":
                    variable1 = stack.pop();
                    data = sin(variable1);
                    stack.push(data);
                    break;
                case "cos":
                    variable1 = stack.pop();
                    data = cos(variable1);
                    stack.push(data);
                    break;
                case "tan":
                    variable1 = stack.pop();
                    data = tan(variable1);
                    stack.push(data);
                    break;
                case "square":
                    variable1 = stack.pop();
                    data = square(variable1);
                    stack.push(data);
                    break;
                case "sqrt":
                    variable1 = stack.pop();
                    data = sqrt(variable1);
                    stack.push(data);
                    break;
                case "^":
                    variable2 = stack.pop();
                    variable1 = stack.pop();
                    data = power(variable1, variable2);
                    stack.push(data);
                    break;
                default:
                    stack.push(v);
                    break;
            }
        });
    }
    // if (stack.length>1) {
    // 	console.log("error")
    // }

    return stack;
}

function add(var1, var2) {
    return parseFloat(var1) + parseFloat(var2);
}

function substract(var1, var2) {
    return parseFloat(var1) - parseFloat(var2);
}

function multiplication(var1, var2) {
    return parseFloat(var1) * parseFloat(var2);
}

function division(var1, var2) {
    return parseFloat(var1) / parseFloat(var2);
}

function sin(var1) {
    return Math.sin(parseFloat(var1));
}

function cos(var1) {
    return Math.cos(parseFloat(var1));
}

function tan(var1) {
    return Math.tan(parseFloat(var1));
}

function square(var1) {
    return parseFloat(var1) * parseFloat(var1);
}

function sqrt(var1) {
    return Math.sqrt(parseFloat(var1));
}

function power(var1, var2) {
    return Math.pow(parseFloat(var1),parseFloat(var2));
}

export default calculator;

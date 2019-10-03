const calculator = string => {
  var stack = [];
  var result = {};
  var arrayOfInput = string.split(" ");
  if (arrayOfInput.length <= 2) {
    return { error: true };
  } else {
    var data, variable1, variable2;
    arrayOfInput.forEach(v => {
      switch (v) {
        case "+":
          variable2 = stack.pop();
          variable1 = stack.pop();
          data = add(variable1, variable2);
          if (!data.error) {
            stack.push(data.value);
          }
          break;
        case "-":
          variable2 = stack.pop();
          variable1 = stack.pop();
          data = substract(variable1, variable2);
          if (!data.error) {
            stack.push(data.value);
          }
          break;
        case "*":
          variable2 = stack.pop();
          variable1 = stack.pop();
          data = multiplication(variable1, variable2);
          if (!data.error) {
            stack.push(data.value);
          }
          break;
        case "/":
          variable2 = stack.pop();
          variable1 = stack.pop();
          data = division(variable1, variable2);
          if (!data.error) {
            stack.push(data.value);
          }
          break;
        case "^":
          variable2 = stack.pop();
          variable1 = stack.pop();
          data = power(variable1, variable2);
          if (!data.error) {
            stack.push(data.value);
          }
          break;
        default:
          stack.push(v);
          break;
      }
    });
  }
  if (stack.length > 1) {
    return { error: true };
  }
  result = { error: false, value: stack };
  return result;
};

const add = (var1, var2) => {
  var value = parseFloat(var1) + parseFloat(var2);
  return { error: false, value: value };
};

const substract = (var1, var2) => {
  var value = parseFloat(var1) - parseFloat(var2);
  return { error: false, value: value };
};

const multiplication = (var1, var2) => {
  var value = parseFloat(var1) * parseFloat(var2);
  return { error: false, value: value };
};

const division = (var1, var2) => {
  if (var2 === "0") {
    return { error: true };
  } else {
    var value = parseFloat(var1) / parseFloat(var2);
    return { error: false, value: value };
  }
};

const power = (var1, var2) => {
  var value = Math.pow(parseFloat(var1), parseFloat(var2));
  return { error: false, value: value };
};

export default calculator;

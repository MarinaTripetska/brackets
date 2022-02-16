module.exports = function check(str, bracketsConfig) {
  const openBrackets = bracketsConfig.map((pair) => pair[0]);
  const closeBrackets = bracketsConfig.map((pair) => pair[1]);

  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    let curSymbol = str[i];

    if (openBrackets.includes(curSymbol)) {
      stack.push(curSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (
        closeBrackets.indexOf(curSymbol) === openBrackets.indexOf(topElement)
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

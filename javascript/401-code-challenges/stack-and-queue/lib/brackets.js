"use strict";

function validate_brackets(brackets) {
  let arr = [];
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "{}" || brackets[i] === "[]" || brackets[i] === "()") {
      arr.push(brackets[i]);
    } else if (brackets[i] === "}" && arr.pop() !== "{") return false;
    else if (brackets[i] === ")" && arr.pop() !== "(") return false;
    else if (brackets[i] === "]" && arr.pop() !== "[") return false;
  }
  return true;
}

module.exports = validate_brackets;

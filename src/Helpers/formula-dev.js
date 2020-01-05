// node src/Helpers/formula-dev.js

/**
 * Take a row formula string and return it formatted
 * @param {string} input - Input formula string
 * @return {string} output a formatted formula string
 */
function formatFormula(input) {
  // ReplaceAt Function
  let replaceAt = function(string, index, replacement) {
    const left = string.substr(0, index);
    const right = string.substr(index + 1, string.length);
    return left + replacement + right;
  }


  // Check if input is undefined
  input = (input !== undefined) ? String(input) : "";
  
  // Check if empty
  if (input.length === 0) {
    return "Empty String";
  }

  // Check if formula starts with "="
  if(input[0] !== "=") {
    input = "=" + input;
  }


  // String Replacement
  input = input.replace(/\;\s/g, ";");
  let deep = 0;
  for (let i = 0; i < input.length; i++) {
    let chr = input[i];
    let delta = input.length;

    if(chr === "=") {
      input = replaceAt(input, i, " = ");
      delta = input.length - delta;
      i = i + delta;
    }

    if(chr === "(") {
      deep += 1;
      input = replaceAt(input, i, " ( \n" + "\t".repeat(deep));
      delta = input.length - delta;
      i = i + delta;
    }

    if(chr === ";") {
      input = replaceAt(input, i, ";\n" + "\t".repeat(deep));
      delta = input.length - delta;
      i = i + delta;
    }

    if(chr === ")") {
      deep -= 1;
      input = replaceAt(input, i, "\n" + "\t".repeat(deep) + ")");
      delta = input.length - delta;
      i = i + delta;
    }
  }

  input = input.trim()

  let result = input;
  return result
}

// console.log(formatFormula());
// console.log(formatFormula(""));
// console.log(formatFormula("ABC"));
// console.log(formatFormula("=ABC"));
// console.log(formatFormula("=Something//"));
// console.log(formatFormula("=Something<script>alert('x //')</script>"));
console.log(formatFormula("=SVERWEIS(x;x;x)"))
console.log(formatFormula('=SVERWEIS(Wenn(y=3;y;y); x; x)'));
console.log(formatFormula('=SVERWEIS(Wenn(y<3;y;y); x; x)'));
console.log(formatFormula('=SVERWEIS(Wenn(y<3;"YES";"NO"); OTHERFUNCTION(3,14; 3; SVERWEIS(X;Y)); x)'));
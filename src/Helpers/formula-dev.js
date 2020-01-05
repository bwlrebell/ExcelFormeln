// node src/Helpers/formula-dev.js

/**
 * Take a row formula string and return it formatted
 * @param {string} input - Input formula string
 * @return {string} output a formatted formula string
 */
function formatFormula(input) {
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

  /* Sanitize input (<, >, //)
  input = input.replace(/</g, "&lt;");
  input = input.replace(/>/g, "&gt;");
  input = input.replace(/\/\//g, "&frasl;&frasl;");
  input = input.trim();

  */

  // ReplaceAt Function
  let replaceAt = function(string, index, replacement) {
    const left = string.substr(0, index);
    const right = string.substr(index + 1, string.length);
    return left + replacement + right;
  }

  // String Replacement
  input = input.replace(/\;\s/g, ";");
  let level = 0;
  
  for (let i = 0; i < input.length; i++) {
    let chr = input[i];
    let delta = input.length;

    if(chr === "=") {
      input = replaceAt(input, i, " = ");
      delta = input.length - delta;
      i = i + delta;
    }

    if(chr === "(") {
      level += 1;
      input = replaceAt(input, i, " ( \n" + "\t".repeat(level));
      delta = input.length - delta;
      i = i + delta;
    }

    if(chr === ";") {
      input = replaceAt(input, i, ";\n" + "\t".repeat(level));
      delta = input.length - delta;
      i = i + delta;
    }

    if(chr === ")") {
      level -= 1;
      input = replaceAt(input, i, "\n" + "\t".repeat(level) + ")");
      delta = input.length - delta;
      i = i + delta;
    }
  }

  let result = input.trim();
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
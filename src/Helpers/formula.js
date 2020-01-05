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

  // Sanitize input (<, >, //)
  input = input.replace(/</g, "&lt;");
  input = input.replace(/>/g, "&gt;");
  input = input.replace(/\/\//g, "&frasl;&frasl;");
  input = input.trim();


  
  let result = input;
  return result
}

module.exports = formatFormula
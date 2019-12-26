/**
 * Take a row formula string and return it formatted
 * @param {string} input - Input formula string
 * @return {string} output a formatted formula string
 */
export function getFormula(input) {
  // Check if input is undefined
  input = (input !== undefined) ? String(input) : "";
    
  console.log(input) 
  console.log(typeof(input));
}
/**
 * Take a row formula string and return it formatted
 * @param {string} input - Input formula string
 * @param {string} lang - Language setting
 * @return {string} output a formatted formula string
 */
function formatFormula(input, lang = "en") {
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

  // Formatting
  if (lang === "de") {
    input = input.replace(/\;\s/g, ";");
  } else {
    input = input.replace(/\,\s/g, ",");
  }
    
  let deep = 0;
  let isOperator = false;
  for (let i = 0; i < input.length; i++) {
    let chr = input[i];
    let delta = input.length;

    let lastChr = (i === 0) ? "" : input[i-1];
      
    if(chr === "(") {
      if(/\w/.test(lastChr)) {
        deep += 1;
        input = replaceAt(input, i, "(\n" + "\t".repeat(deep));
        delta = input.length - delta;
        i = i + delta;
        isOperator = false;
      } else {
        isOperator = true;
      }
    }

    if (lang === "de") {
      if(chr === ";") {
        input = replaceAt(input, i, ";\n" + "\t".repeat(deep));
        delta = input.length - delta;
        i = i + delta;
      }
    } else {
        if(chr === ",") {
          input = replaceAt(input, i, ",\n" + "\t".repeat(deep));
          delta = input.length - delta;
          i = i + delta;
        }
    }
      
    if(chr === ")") {
      if(!isOperator) {
        deep -= 1;
        input = replaceAt(input, i, "\n" + "\t".repeat(deep) + ")");
        delta = input.length - delta;
        i = i + delta;
      } else {
        isOperator = false;
      }
    } 
  }

  input = input.replace(/\t/g, " ".repeat(4));
  input = input.trim()

  let result = input;
  return result
}


// ############################################################################
// Test
describe("Simple Inputs", () => {
  test("Empty input -> Return warning", () => {
    let result = formatFormula();
    expect(result).toBe("Empty String");
  });

  test("Empty string -> Return warning", () => {
    let result = formatFormula("");
    expect(result).toBe("Empty String");
  });

  test("ABC -> =ABC", () => {
    let result = formatFormula("ABC");
    expect(result).toBe("=ABC");
  });

  test("=ABC -> =ABC", () => {
    let result = formatFormula("=ABC");
    expect(result).toBe("=ABC");
  });
});

describe("Excel Formulas", () => {
  test("Sverweis DE", () => {
    let result = formatFormula("=SVERWEIS(x;x;x)", "de").length;
    expect(result).toBe(32)
  });

});
/**
 * Take a row formula string and return it formatted
 * @param {string} input - Input formula string
 * @param {string} lang - Language setting
 * @return {string} output a formatted formula string
 */
export function formatFormula(input, lang = "en") {
  // ReplaceAt Function
  let replaceAt = function(string, index, replacement) {
    const left = string.substr(0, index);
    const right = string.substr(index + 1, string.length);
    return left + replacement + right;
  }

  try {
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
      input = input.replace(/\;\s/g, ",");
    }
    
    let deep = 0;
    for (let i = 0; i < input.length; i++) {
      let chr = input[i];
      let delta = input.length;

      if(chr === "=") {
        input = replaceAt(input, i, "=");
        delta = input.length - delta;
        i = i + delta;
      }

      if(chr === "(") {
        deep += 1;
        input = replaceAt(input, i, " ( \n" + "\t".repeat(deep));
        delta = input.length - delta;
        i = i + delta;
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
        deep -= 1;
        input = replaceAt(input, i, "\n" + "\t".repeat(deep) + ")");
        delta = input.length - delta;
        i = i + delta;
      }
    }

    input = input.replace(/\t/g, " ".repeat(4));
    input = input.trim()

    let result = input;
    return result
  } catch(err) {
    return err.message
  }
}

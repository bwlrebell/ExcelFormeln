"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Take a row formula string and return it formatted
 * @param {string} input - Input formula string
 * @param {string} lang - Language setting
 * @return {string} output a formatted formula string
 */
function formatFormula(input, lang) {
    if (lang === void 0) { lang = "en"; }
    // ReplaceAt Function
    var replaceAt = function (string, index, replacement) {
        var left = string.substr(0, index);
        var right = string.substr(index + 1, string.length);
        return left + replacement + right;
    };
    // Check if input is undefined
    input = (input !== undefined) ? String(input) : "";
    // Check if empty
    if (input.length === 0) {
        return "Empty String";
    }
    // Check if formula starts with "="
    if (input[0] !== "=") {
        input = "=" + input;
    }
    // Formatting
    if (lang === "de") {
        input = input.replace(/\;\s/g, ";");
    }
    else {
        input = input.replace(/\,\s/g, ",");
    }
    var deep = 0;
    var isOperator = false;
    for (var i = 0; i < input.length; i++) {
        var chr = input[i];
        var delta = input.length;
        var lastChr = (i === 0) ? "" : input[i - 1];
        if (chr === "(") {
            if (/\w/.test(lastChr)) {
                deep += 1;
                input = replaceAt(input, i, "(\n" + "\t".repeat(deep));
                delta = input.length - delta;
                i = i + delta;
                isOperator = false;
            }
            else {
                isOperator = true;
            }
        }
        if (lang === "de") {
            if (chr === ";") {
                input = replaceAt(input, i, ";\n" + "\t".repeat(deep));
                delta = input.length - delta;
                i = i + delta;
            }
        }
        else {
            if (chr === ",") {
                input = replaceAt(input, i, ",\n" + "\t".repeat(deep));
                delta = input.length - delta;
                i = i + delta;
            }
        }
        if (chr === ")") {
            if (!isOperator) {
                deep -= 1;
                input = replaceAt(input, i, "\n" + "\t".repeat(deep) + ")");
                delta = input.length - delta;
                i = i + delta;
            }
            else {
                isOperator = false;
            }
        }
    }
    input = input.replace(/\t/g, " ".repeat(4));
    input = input.trim();
    var result = input;
    return result;
}
exports.default = formatFormula;

const formatFormula = require("./formula.js");

describe("Sanitation", () => {
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

  test("Javascript Comments", () => {
    let result = formatFormula("Something//");
    expect(result).toBe("=Something&frasl;&frasl;");
  });

  test("XSS Injection", () => {
    let result = formatFormula("=Something<script>alert('x //')</script>");
    expect(result).toBe("=Something&lt;script&gt;alert('x &frasl;&frasl;')&lt;/script&gt;");
  });
});
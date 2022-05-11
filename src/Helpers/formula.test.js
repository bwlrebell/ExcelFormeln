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

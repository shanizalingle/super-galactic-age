import Age from "../src/js/business.js";

describe ("Age", () => {
  
  test("return inputted age", () => {
    let age = new Age(18);
    expect(age.earthAge).toEqual(18);
  })
})

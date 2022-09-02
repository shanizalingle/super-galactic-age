import Age from "../src/js/business.js";

describe ("Age", () => {
  
  test("return inputted age", () => {
    let age = new Age(18);
    expect(age.earthAge).toEqual(18);
  })

  test("return mercury age", () => {
    let age = new Age(18);
    expect(age.mercuryAge).toEqual(4.32);
  })
})

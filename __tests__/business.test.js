import SuperGalacticAge from "../src/js/business.js";

describe ("SuperGalacticAge", () => {

// Determine age on other planets
  test("return inputted age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.earthAge).toEqual(18);
  })

  test("return mercury age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findMercuryAge()).toEqual(4.32);
  })

  test("return venus age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findVenusAge()).toEqual(11.16);
  })

  test("return mars age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findMarsAge()).toEqual(33.84);
  })

  test("return jupiter age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findJupiterAge()).toEqual(213.48);
  })

// Determine lifespan on other planets
  test("return earth life span", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findEarthLifeSpan()).toEqual(62);
  })

  test("return mercury life span", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findMercuryLifeSpan()).toEqual(1.2);
  })

  test("return venus life span", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findVenusLifeSpan()).toEqual(31.6);
  })

  test("return mars life span", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findMarsLifeSpan()).toEqual(132.4);
  })
})

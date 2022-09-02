import SuperGalacticAge from "../src/js/business.js";

describe ("SuperGalacticAge", () => {

// Determine age on other planets
  test("return inputted age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.earthAge).toEqual(18);
  })

  test("return mercury age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findMercuryAge()).toEqual(4.3);
  })

  test("return venus age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findVenusAge()).toEqual(11.2);
  })

  test("return mars age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findMarsAge()).toEqual(33.8);
  })

  test("return jupiter age", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findJupiterAge()).toEqual(213.5);
  })

// Determine lifespan on other planets
  test("return earth life span", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findEarthLifeSpan()).toEqual(62);
  })

  test("return mercury life span", () => {
    let superGalacticAge = new SuperGalacticAge(4.3);
    expect(superGalacticAge.findMercuryLifeSpan()).toEqual(14.9);
  })

  test("return venus life span", () => {
    let superGalacticAge = new SuperGalacticAge(11.2);
    expect(superGalacticAge.findVenusLifeSpan()).toEqual(38.4);
  })

  test("return mars life span", () => {
    let superGalacticAge = new SuperGalacticAge(33.8);
    expect(superGalacticAge.findMarsLifeSpan()).toEqual(116.6);
  })

  test("return jupiter life span", () => {
    let superGalacticAge = new SuperGalacticAge(213.5);
    expect(superGalacticAge.findJupiterLifeSpan()).toEqual(735.3);
  })
})

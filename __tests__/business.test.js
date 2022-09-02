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
  test("return earth life span (for 80 years)", () => {
    let superGalacticAge = new SuperGalacticAge(18);
    expect(superGalacticAge.findEarthLifeSpan()).toEqual(62);
  })

  test("return earth life span (for 80 years)", () => {
    let superGalacticAge = new SuperGalacticAge(100);
    expect(superGalacticAge.findEarthLifeSpan()).toEqual(20);
  })

  test("return mercury life span (for 19.2 years)", () => {
    let superGalacticAge = new SuperGalacticAge(4.3);
    expect(superGalacticAge.findMercuryLifeSpan()).toEqual(14.9);
  })

    test("return mercury life span (for 19.2 years)", () => {
    let superGalacticAge = new SuperGalacticAge(24);
    expect(superGalacticAge.findMercuryLifeSpan()).toEqual(4.8);
  })

  test("return venus life span (for 49.6)", () => {
    let superGalacticAge = new SuperGalacticAge(11.2);
    expect(superGalacticAge.findVenusLifeSpan()).toEqual(38.4);
  })

    test("return venus life span (for 49.6)", () => {
    let superGalacticAge = new SuperGalacticAge(62);
    expect(superGalacticAge.findVenusLifeSpan()).toEqual(12.4);
  })

  test("return mars life span (for 150.4)", () => {
    let superGalacticAge = new SuperGalacticAge(33.8);
    expect(superGalacticAge.findMarsLifeSpan()).toEqual(116.6);
  })

    test("return mars life span (for 150.4)", () => {
    let superGalacticAge = new SuperGalacticAge(188);
    expect(superGalacticAge.findMarsLifeSpan()).toEqual(37.6);
  })

  test("return jupiter life span (for 948.8)", () => {
    let superGalacticAge = new SuperGalacticAge(213.5);
    expect(superGalacticAge.findJupiterLifeSpan()).toEqual(735.3);
  })

    test("return jupiter life span (for 948.8)", () => {
    let superGalacticAge = new SuperGalacticAge(1186);
    expect(superGalacticAge.findJupiterLifeSpan()).toEqual(237.2);
  })
})

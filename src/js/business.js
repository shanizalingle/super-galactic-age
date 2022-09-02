export default class SuperGalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
  }

  findMercuryAge() {
    let newMercuryAge;
    newMercuryAge =Math.round((this.earthAge * .24) * 100)/100;;
    this.mercuryAge = newMercuryAge;
    return newMercuryAge;
  }

  findVenusAge() {
    let newVenusAge;
    newVenusAge = Math.round((this.earthAge * .62) * 100)/100;
    this.venusAge = newVenusAge;
    return newVenusAge;
  }

  findMarsAge() {
    let newMarsAge;
    newMarsAge = Math.round((this.earthAge * 1.88) * 100)/100;
    this.marsAge = newMarsAge;
    return newMarsAge;
  }

  findJupiterAge() {
    let newJupiterAge;
    newJupiterAge = Math.round((this.earthAge * 11.86) * 100)/100;
    this.jupiterAge = newJupiterAge;
    return newJupiterAge;
  }
}


export default class SuperGalacticAge {
  constructor(earthAge, mercuryAge, venusAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
  }

  findMercuryAge() {
    let newMercuryAge;
    newMercuryAge = this.earthAge * .24;
    this.mercuryAge = newMercuryAge;
    return newMercuryAge;
  }

  findVenusAge() {
    let newVenusAge;
    newVenusAge = this.earthAge * .62;
    this.venusAge = newVenusAge;
    return newVenusAge;
  }
}


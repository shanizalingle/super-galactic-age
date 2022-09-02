export default class SuperGalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
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
}


export default class SuperGalacticAge {
  constructor(earthAge, mercuryAge) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
  }

  findMercuryAge() {
    let newMercuryAge;
    newMercuryAge = this.earthAge * .24;
    this.mercuryAge = newMercuryAge;
    return newMercuryAge;
  }
}


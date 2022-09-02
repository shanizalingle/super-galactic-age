export default class SuperGalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthLifeSpan, mercuryLifeSpan) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthLifeSpan = earthLifeSpan;
    this.mercuryLifeSpan = mercuryLifeSpan;
  }

// Determine age on other planets
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

// Determine lifespan on other planets
  findEarthLifeSpan() {
    let newEarthLifeSpan;
    /*istanbul ignore else*/
    if (this.earthAge < 80) {
      newEarthLifeSpan = Math.round((80 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newEarthLifeSpan;
      return newEarthLifeSpan;
    } else {
      newEarthLifeSpan = Math.round((80 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newEarthLifeSpan;
      return newEarthLifeSpan;
    }
  }

  findMercuryLifeSpan() {
    let newMercuryLifeSpan;
    /*istanbul ignore else*/
    if (this.earthAge < 19.2) {
      newMercuryLifeSpan = Math.round((19.2 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newMercuryLifeSpan;
      return newMercuryLifeSpan;
    } else {
      newMercuryLifeSpan = Math.round((19.2 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newMercuryLifeSpan;
      return newMercuryLifeSpan;
    }
  }

  findVenusLifeSpan() {
    let newVenusLifeSpan;
    /*istanbul ignore else*/
    if (this.earthAge < 49.6) {
      newVenusLifeSpan = Math.round((49.6 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newVenusLifeSpan;
      return newVenusLifeSpan;
    } else {
      newVenusLifeSpan = Math.round((49.6 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newVenusLifeSpan;
      return newVenusLifeSpan;
    }
  }
}


export default class SuperGalacticAge {
  constructor(earthAge, mercuryAge, venusAge, marsAge, jupiterAge, earthLifeSpan, mercuryLifeSpan, venusLifeSpan, marsLifeSpan) {
    this.earthAge = earthAge;
    this.mercuryAge = mercuryAge;
    this.venusAge = venusAge;
    this.marsAge = marsAge;
    this.jupiterAge = jupiterAge;
    this.earthLifeSpan = earthLifeSpan;
    this.mercuryLifeSpan = mercuryLifeSpan;
    this.venusLifeSpan = venusLifeSpan;
    this.marsLifeSpan = marsLifeSpan;
  }

// Determine age on other planets
  findMercuryAge() {
    let newMercuryAge;
    newMercuryAge =Math.round((this.earthAge * .24) * 10)/10;
    this.mercuryAge = newMercuryAge;
    return newMercuryAge;
  }

  findVenusAge() {
    let newVenusAge;
    newVenusAge = Math.round((this.earthAge * .62) * 10)/10;
    this.venusAge = newVenusAge;
    return newVenusAge;
  }

  findMarsAge() {
    let newMarsAge;
    newMarsAge = Math.round((this.earthAge * 1.88) * 10)/10;
    this.marsAge = newMarsAge;
    return newMarsAge;
  }

  findJupiterAge() {
    let newJupiterAge;
    newJupiterAge = Math.round((this.earthAge * 11.86) * 10)/10;
    this.jupiterAge = newJupiterAge;
    return newJupiterAge;
  }

// Determine lifespan on other planets
  findEarthLifeSpan() {
    let newEarthLifeSpan;
    if (this.earthAge < 80) {
      newEarthLifeSpan = Math.round((80 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newEarthLifeSpan;
      return newEarthLifeSpan;
    } else {
      newEarthLifeSpan = Math.round((this.earthAge - 80) * 10)/10;  
      this.earthLifeSpan = newEarthLifeSpan;
      return newEarthLifeSpan;
    }
  }

  findMercuryLifeSpan() {
    let newMercuryLifeSpan;
    if (this.earthAge < 19.2) {
      newMercuryLifeSpan = Math.round((19.2 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newMercuryLifeSpan;
      return newMercuryLifeSpan;
    } else {
      newMercuryLifeSpan = Math.round((this.earthAge - 19.2) * 10)/10;  
      this.earthLifeSpan = newMercuryLifeSpan;
      return newMercuryLifeSpan;
    }
  }

  findVenusLifeSpan() {
    let newVenusLifeSpan;
    if (this.earthAge < 49.6) {
      newVenusLifeSpan = Math.round((49.6 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newVenusLifeSpan;
      return newVenusLifeSpan;
    } else {
      newVenusLifeSpan = Math.round((this.earthAge - 49.6) * 10)/10;  
      this.earthLifeSpan = newVenusLifeSpan;
      return newVenusLifeSpan;
    }
  }

  findMarsLifeSpan() {
    let newMarsLifeSpan;
    if (this.earthAge < 150.4) {
      newMarsLifeSpan = Math.round((150.4 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newMarsLifeSpan;
      return newMarsLifeSpan;
    } else {
      newMarsLifeSpan = Math.round((this.earthAge - 150.4) * 10)/10;  
      this.earthLifeSpan = newMarsLifeSpan;
      return newMarsLifeSpan;
    }
  }

  findJupiterLifeSpan() {
    let newJupiterLifeSpan;
    if (this.earthAge < 948.8) {
      newJupiterLifeSpan = Math.round((948.8 - this.earthAge) * 10)/10;  
      this.earthLifeSpan = newJupiterLifeSpan;
      return newJupiterLifeSpan;
    } else {
      newJupiterLifeSpan = Math.round((this.earthAge - 948.8) * 10)/10;  
      this.earthLifeSpan = newJupiterLifeSpan;
      return newJupiterLifeSpan;
    }
  }
}


/**
 * Builder
 *
 * creational pattern to construct an object step by step
 * separates the construction of an object from its representation, allowing you to create
 * different variations of an object by using the same construction process
 *
 *
 */

class HouseBuilder {
  constructor() {
    this.house = {};
  }

  buildWalls() {}
  buildRoof() {}
  buildWindows() {}
  buildDoors() {}
  getResult() {}
}

class SimpleHouseBuilder extends HouseBuilder {
  buildWalls() {
    this.house.walls = "Simple walls";
  }

  buildRoof() {
    this.house.roof = "Simple roof";
  }

  buildWindows() {
    this.house.windows = "Simple windows";
  }

  buildDoors() {
    this.house.doors = "Simple doors";
  }

  getResult() {
    return this.house;
  }
}

class FancyHouseBuilder extends SimpleHouseBuilder {
  buildWalls() {
    this.house.walls = "Fancy walls";
  }

  buildRoof() {
    this.house.root = "Fancy roof";
  }
}

class LuxuryHouseBuilder extends FancyHouseBuilder {
  buildWindows() {
    this.house.windows = "Luxury windows";
  }

  buildDoors() {
    this.house.doors = "Luxury doors";
  }
}

class HouseDirector {
  constructor(builder) {
    this.builder = builder;
  }

  construct() {
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildWindows();
    this.builder.buildDoors();
    console.table(this.builder.getResult());
  }
}

const simple = new SimpleHouseBuilder();
const fancy = new FancyHouseBuilder();
const luxury = new LuxuryHouseBuilder();
const director1 = new HouseDirector(simple);
const director2 = new HouseDirector(fancy);
const director3 = new HouseDirector(luxury);

director1.construct();
director2.construct();
director3.construct();

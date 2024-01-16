/**
 * Factory
 *
 * provides an interface for creating objects without specifing concrete classes
 * encapsulates the object creation logic in a separate class and allows the client
 * code to create objects through the factory interface
 *
 * loose coupling
 * decouples client code from the actual object creation process
 *
 */

class Car {
  constructor() {
    this.type = null;
  }

  start() {
    console.log(`${this.type} car is starting!`);
  }

  stop() {
    console.log(`${this.type} car is stopping!`);
  }
}

class Sedan extends Car {
  constructor() {
    super();
    this.type = "Sedan";
  }
}

class SUV extends Car {
  constructor() {
    super();
    this.type = "SUV";
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "Sedan":
        return new Sedan();
      case "SUV":
        return new SUV();
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();

const sedanCar = carFactory.createCar("Sedan");
sedanCar.start();
sedanCar.stop();

const suvCar = carFactory.createCar("SUV");
suvCar.start();
suvCar.stop();

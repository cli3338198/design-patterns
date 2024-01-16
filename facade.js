/**
 * Facade
 *
 * provides a simplified interface to a complex system of classes, subsystems and APIs
 * this pattern encapsulates the complexity of the system behind a single class, a "facade",
 * that acts as an entry point for clients to access the system's functionality
 *
 * a front-facing interface that masks complex underlying or structural code
 *
 * product question -> customer service department -> forward to appropriate dept
 * -> sales/management/IT -> gets response -> customer service responds to you!
 *
 * provides a high level interface for client
 * simplified interface to a set of interfaces in a subsystem
 *
 * client ->                         -> subsystem
 * client ->                         -> subsystem
 * client ->        facade ->        -> subsystem
 * client ->                         -> subsystem
 * client ->                         -> subsystem
 *
 * - addresses the SOLID, single responsibility principle, by providing a simplified high level interface
 * that delegates responsibilities to a set of subsystem interfaces
 *
 */

class Engine {
  start() {
    console.log("Engine started");
  }

  stop() {
    console.log("Engine stopped");
  }
}

class Lights {
  start() {
    console.log("Lights on");
  }

  stop() {
    console.log("Lights off");
  }
}

class AirConditioner {
  start() {
    console.log("Air conditioner on");
  }

  stop() {
    console.log("Air conditioner off");
  }
}

class CarFacade {
  constructor() {
    this.engine = new Engine();
    this.lights = new Lights();
    this.airConditioner = new AirConditioner();
  }

  startCar() {
    this.engine.start();
    this.lights.start();
    this.airConditioner.start();
    console.log("Car started");
  }

  stopCar() {
    this.engine.stop();
    this.lights.stop();
    this.airConditioner.stop();
    console.log("Car stopped");
  }
}

const car = new CarFacade();
car.startCar();
car.stopCar();

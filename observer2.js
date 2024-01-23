/**
 * Observer
 *
 * - state of an object and need to notify other objects
 */

class Observer {
  // abstract

  update(value) {
    console.log(`${this.constructor.name} was updated with ${value}`);
  }
}

class Spreadsheet extends Observer {
  // concrete
}

class Chart extends Observer {
  // concrete
}

class DataSource {
  // subject/observable
  constructor() {
    this.value = "";
    this.observers = [];
  }

  setValue(value) {
    this.value = value;
    this.notifyObservers();
  }

  getValue() {
    return this.value;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(
      (curObserver) => curObserver !== observer
    );
  }

  notifyObservers() {
    // polymorphic behavior
    // observer object will take on many different forms depending  on th type at runtime

    // push style of communication
    // "pushes" data to the observers
    // not very flexible
    // makes assumptions of the observer
    // if the observer needs different data, need to "push" different values to each observer
    this.observers.forEach((observer) => observer.update(this.value));

    // "pull" style
    // each concrete observe should have a reference to a concrete subject
    // however you have coupling between observer and subject
    // but not bad type of coupling
    // in bad coupling a concrete subject is strongly coupled to a concrete observer
    // and is aware of the observer
    // in this case a concrete observer is coupled with a concrete subject
    // but subject is not aware of the observers
    // DIRECTION OF COUPLING MATTERS
  }
}

const data = new DataSource();
data.addObserver(new Spreadsheet());
data.addObserver(new Chart());
data.setValue("cupcakes");

// pull style

class Observer2 {
  update() {
    console.log(
      `updated, pulling data from ${
        this.observable.constructor.name
      }: ${this.observable.getValue()}`
    );
  }
}

class Spreadsheet2 extends Observer2 {
  constructor(observable) {
    super();
    this.observable = observable;
  }
}

class Chart2 extends Observer2 {
  constructor(observable) {
    super();
    this.observable = observable;
  }
}

class Observable {
  constructor() {
    this.value = "";
    this.observers = [];
  }

  setValue(value) {
    this.value = value;
    this.notifyObservers();
  }

  getValue() {
    return this.value;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(
      (curObserver) => curObserver !== observer
    );
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update());
  }
}

const source = new Observable();
source.addObserver(new Spreadsheet2(source));
source.addObserver(new Chart2(source));
source.setValue("some new data");

/**
 * Observer
 *
 * have a single source-of-truth that multiple other components need to be in sync with
 * one-to-many dependency between objects so when one object changes state all others are notified/updated
 *
 * subject broadcasts and all dependents are notified
 *
 * REACT!!!
 *
 * monitoring systems, real-time collaboration tools (google docs), event handling systems
 *
 * SOLID:
 * single responsibility - separation of concerns adheres to idea of each class having a single reason to change
 * open/close - can add more observers, open to change
 * dependency inversion - make the subject depend on abstractions rather than on concrete observer classes, abstractions
 *  should not depend on details, but details should depend on abstractions
 *
 */

class WeatherObserver {
  constructor(type) {
    this.type = type;
    this.data = 0;
  }

  update(temperature, humidity, pressure) {
    if (this.type === "temperature") {
      this.data = temperature;
    } else if (this.type === "humidity") {
      this.data = humidity;
    } else if (this.type === "pressure") {
      this.data = pressure;
    }
    console.log(`${this.type} was changed!`);
  }
}

class WeatherData {
  constructor() {
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;

    this.observers = [];
    for (const observer of ["temperature", "humidity", "pressure"]) {
      this.observers.push(new WeatherObserver(observer));
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}

const weatherData = new WeatherData();
weatherData.setMeasurements(10, 0, 15);

//

class NewsAgency {
  constructor() {
    this.news = "";
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  setNews(news) {
    this.news = news;
    this.notifyObservers();
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.news));
  }
}

class NewsChannel {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} received news ${news}`);
  }
}

const bbc = new NewsChannel("BBC");
const cnn = new NewsChannel("CNN");
const agency = new NewsAgency();
agency.addObserver(bbc);
agency.addObserver(cnn);

agency.setNews("Puppy is cute!");

/**
 * React uses a similar concept called the "Observer" pattern through its built-in state and props system.

State and Props:

React components can be thought of as observers of their own state and props. When the state or props of a component change, the component is re-rendered, and any dependent UI is updated.
Context API:

React's Context API, introduced to share values like themes or authentication status across the component tree, uses the observer pattern. Components can subscribe to changes in the context and automatically re-render when the context value changes.
Hooks:

React Hooks, such as useState and useEffect, can be seen as implementations of the Observer Pattern. Components can subscribe to changes in state using useState, and useEffect allows components to react to changes after rendering.
Redux:

In state management libraries like Redux, which is commonly used with React, the Observer Pattern is employed. Components can subscribe to changes in the Redux store, and when the state in the store changes, connected components are notified and re-rendered.
While React doesn't use the traditional Observer Pattern with explicit addObserver and removeObserver methods, the concept of observing changes and triggering reactions is fundamental to React's component-based architecture. The reactive nature of React components aligns with the principles of the Observer Pattern.
 */

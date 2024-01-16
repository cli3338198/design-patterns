/**
 * Singleton
 *
 * ensure a class has only one instance
 * used when you want to control access to a shared resource or centralize certain
 * functionalities to maintain consistency and avoid conflicts
 *
 *
 * SOLID:
 * dependency inversion - clients depend on abstractions not details
 */

class Highlander {
  constructor() {
    if (Highlander.instance) {
      throw new Error("There can be only one!");
    }

    Highlander.instance = this;
  }

  static getInstance() {
    if (!Highlander.instance) {
      return new Highlander();
    }

    return Highlander.instance;
  }
}

const highlanderInstance = Highlander.getInstance();

try {
  const whoIsThis = Highlander.getInstance();
  console.log(whoIsThis === highlanderInstance); // true
} catch (err) {
  console.log(err);
}

try {
  const highlanderInstance2 = new Highlander();
} catch (err) {
  console.log(err.message); // error
}

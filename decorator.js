/**
 * Decorator
 *
 * structural design pattern to add new functionality to an existing object without
 * altering structure
 *
 * decorator class that wraps concrete components
 *
 * large number of features for a "base" class
 * mix and match with decorators
 *
 * divide a class that has many responsibilities into smaller classes
 *
 */

class Coffee {
  cost() {
    return 5;
  }

  getDescription() {
    return "Coffee";
  }
}

class SimpleCoffee extends Coffee {
  cost() {
    return super.cost();
  }

  getDescription() {
    return super.getDescription();
  }
}

// Decorator

class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this._coffee = coffee;
  }

  cost() {
    return this._coffee.cost();
  }

  getDescription() {
    return this._coffee.getDescription();
  }
}

// Concrete decorators

class MilkDecorator extends Coffee {
  cost() {
    return super.cost() + 2;
  }

  getDescription() {
    return super.getDescription() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return super.cost() + 1;
  }

  getDescription() {
    return super.getDescription() + ", Sugar";
  }
}

const plainCoffee = new SimpleCoffee();
console.log("Cost: $" + plainCoffee.cost()); // Output: Cost: $5
console.log("Description: " + plainCoffee.getDescription()); // Output: Description: Coffee

const milkCoffee = new MilkDecorator(plainCoffee);
console.log("Cost: $" + milkCoffee.cost()); // Output: Cost: $7
console.log("Description: " + milkCoffee.getDescription()); // Output: Description: Coffee, Milk

const sweetMilkCoffee = new SugarDecorator(milkCoffee);
console.log("Cost: $" + sweetMilkCoffee.cost()); // Output: Cost: $8
console.log("Description: " + sweetMilkCoffee.getDescription()); // Output: Description: Coffee, Milk, Sugar

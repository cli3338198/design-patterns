/**
 * Command
 *
 * behavioral design pattern that turns a request into a stand alone object that contains information
 * on the request
 *
 * separation of concerns
 *
 * customer: client (main method)
 * order: command
 * waiter: invoker
 * kitchen staff: receiver
 *
 *
 *
 */

class Command {
  execute() {}
}

class PlaceOrderCommand extends Command {
  constructor(receiver, food) {
    super();
    this.receiver = receiver;
    this.food = food;
  }

  execute() {
    this.receiver.placeOrder(this.food);
  }
}

// Receiver

class Kitchen {
  placeOrder(food) {
    console.log(`Kitchen received order: ${food}`);
  }
}

// Invoker

class Waiter {
  constructor() {
    this.orders = [];
  }

  takeOrder(command) {
    this.orders.push(command);
    command.execute();
  }
}

const kitchen = new Kitchen();
const waiter = new Waiter();

const pizzaCommand = new PlaceOrderCommand(kitchen, "Pizza");
const burgerCommand = new PlaceOrderCommand(kitchen, "Burger");

waiter.takeOrder(pizzaCommand);
waiter.takeOrder(burgerCommand);

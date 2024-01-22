/**
 * Command
 *
 * - concrete class delegates work to a receiver class
 */

// example

// class Button {
//   constructor() {
//     this.label = "";
//   }
//   getLabel() {
//     return this.label;
//   }
//   setLabel(label) {
//     this.label = label;
//   }
//   click() {
//     // don't know what this functionality will be
//     // don't want to couple this with another class
//     // should be dynamic!
//   }
// }

// example

class Command {
  execute() {}
}

class AddCustomerCommand extends Command {
  /**
   *
   * @param {CustomerService} customerService
   */
  constructor(customerService) {
    super();
    this.service = customerService;
  }

  execute() {
    this.service.addCustomer();
  }
}

class Button {
  /**
   * @param {Command} command
   */
  constructor(command) {
    this.label = "";
    this.command = command;
  }

  click() {
    // delegate to command
    // so this button class doesn't need to know what it's executing
    this.command.execute();
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    this.label = label;
  }
}

class CustomerService {
  addCustomer() {
    console.log("add customer");
  }
}

const addCustomerButton = new Button(
  new AddCustomerCommand(new CustomerService())
);
addCustomerButton.click();

// composite commands - container for multiple commands to be executed

class ResizeCommand extends Command {
  execute() {
    console.log("resize");
  }
}

class BWFilterCommand extends Command {
  execute() {
    console.log("b & w filter");
  }
}

class CompositeCommand extends Command {
  constructor() {
    super();
    this.commands = [];
  }

  /**
   *
   * @param {Command} command
   */
  addCommand(command) {
    this.commands.push(command);
  }

  execute() {
    this.commands.forEach((command) => command.execute());
  }
}

const composite = new CompositeCommand();
composite.addCommand(new ResizeCommand());
composite.addCommand(new BWFilterCommand());
composite.execute();

// undoable command
// introduce an interface that allows undo

class UndoableCommand extends Command {
  // not added to command class because not all commands are undoable
  // think, the "save document" command, cannot undo this
  unexecute() {}
}

// example

class BoldCommand extends UndoableCommand {
  /**
   *
   * @param {HtmlDocument} document
   * @param {History} history
   */
  constructor(document, history) {
    super();
    this.prevContent = null;
    this.document = document;
    this.history = history;
  }

  execute() {
    this.prevContent = this.document.getContent();
    this.document.makeBold();
    this.history.push(this);
  }

  unexecute() {
    this.document.setContent(this.prevContent);
    // this.prevContent = this.history.pop();
  }
}

class UndoCommand extends Command {
  /**
   *
   * @param {History} history
   */
  constructor(history) {
    super();
    this.history = history;
  }

  execute() {
    this.history.pop().unexecute();
  }
}

class History {
  constructor() {
    this.commands = [];
  }

  push(command) {
    this.commands.push(command);
  }

  pop() {
    if (this.size() > 0) {
      return this.commands.pop();
    }
  }

  size() {
    return this.commands.length;
  }
}

class HtmlDocument {
  constructor(content) {
    this.content = content;
  }

  makeBold() {
    this.content = `<strong>${this.content}</strong>`;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }
}

const history = new History();
const document = new HtmlDocument("Hello World");
const command = new BoldCommand(document, history);
command.execute();

console.log(document.getContent());
const undoCommand = new UndoCommand(history); // both commands talk to the same history object
undoCommand.execute();
console.log(document.getContent());

/**
 * State
 *
 * - addresses lack of extensibility
 * - more tool types === more if else statements
 * - this is difficult to extend
 * - ideally, want the mouseUp/down to behave differetly depending on the currentTool
 *
 * - polymorphism! - allows an object to take on many different forms
 *
 * - mouseUp/down should be abstract methods
 *
 * - create an abstract tool class
 * - that say, selection class or brush class extends
 *
 * - state pattern -> functionality changes depending on the current state
 */

// example 1

// const TYPES = ["brush", "selection", "eraser"];

// class Canvas {
//   constructor() {
//     this.currentTool = null;
//   }

//   mouseDown() {
//     if (this.currentTool === "brush") {
//       console.log("Brush icon");
//     } else if (this.currentTool === "selection") {
//       console.log("Selection icon");
//     } else if (this.currentTool === "eraser") {
//       console.log("Eraser icon");
//     }
//   }

//   mouseUp() {
//     if (this.currentTool === "brush") {
//       console.log("Draw line");
//     } else if (this.currentTool === "selection") {
//       console.log("Draw rectangle");
//     } else if (this.currentTool === "eraser") {
//       console.log("Erase something");
//     }
//   }

//   getCurrentTool() {}

//   setCurrentTool() {}
// }

// example 2

// class Canvas {
//   // Context
//   request() {}
// }

// class Tool {
//   // State
//   mouseUp() {}
//   mouseDown() {}
// }

// class Selection {
//   // Concrete State A
//   mouseUp() {}
//   mouseDown() {}
// }

// class Brush {
//   // Concrete State B
//   mouseUp() {}
//   mouseDown() {}
// }

// example 3

class Tool {
  // abstract
  mouseUp() {}
  mouseDown() {}
}

class SelectionTool extends Tool {
  // concrete
  mouseUp() {
    console.log("Selection icon");
  }
  mouseDown() {
    console.log("Draw rectangle");
  }
}

class BrushTool extends Tool {
  // concrete
  mouseUp() {
    console.log("Brush icon");
  }
  mouseDown() {
    console.log("Draw a line");
  }
}

class Canvas {
  constructor() {
    this.tool = null;
  }

  mouseUp() {
    this.tool.mouseUp(); // delegates to the tool, INVERSION OF CONTROL?
  }

  mouseDown() {
    this.tool.mouseDown();
  }

  getTool() {
    return this.tool;
  }

  setTool(tool) {
    this.tool = tool;
  }
}

const canvas = new Canvas();
canvas.setTool(new SelectionTool());
console.log(canvas.getTool());
canvas.mouseDown();
canvas.setTool(new BrushTool());
console.log(canvas.getTool());
canvas.mouseDown();

// open close principle
// - our classes should be open to extension
// - but closed to modification
// - can support new functionality, without changing original functionality

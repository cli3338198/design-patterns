/**
 * State
 *
 * allows an object to alter its behavior when its internal state changes
 * it appears as if the object has changed classes
 *
 *
 */

class VendingMachineState {
  insertCoin() {}
  ejectCoin() {}
  selectItem() {}
  dispenseItem() {}
}

class NoCoinState extends VendingMachineState {
  constructor(vendingMachine) {
    super();
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    console.log("Coin inserted. You can now select an item!");
    this.vendingMachine.changeState(new HasCoinState(this.vendingMachine));
  }

  ejectCoin() {
    console.log("No coin to eject");
  }

  selectItem() {
    console.log("Please insert a coin");
  }

  dispenseItem() {
    console.log("Please insert a coin");
  }
}

class HasCoinState extends VendingMachineState {
  constructor(vendingMachine) {
    super();
    this.vendingMachine = vendingMachine;
  }

  insertCoin() {
    console.log("Coin already inserted");
  }

  ejectCoin() {
    console.log("Coin ejected");
    this.vendingMachine.changeState(new NoCoinState(this.vendingMachine));
  }

  selectItem() {
    console.log("Item selected");
    this.vendingMachine.changeState(new NoCoinState(this.vendingMachine));
  }

  dispenseItem() {
    console.log("Please select an item");
  }
}

class VendingMachine {
  constructor() {
    this.state = new NoCoinState(this);
  }

  changeState(newState) {
    this.state = newState;
  }

  insertCoin() {
    this.state.insertCoin();
  }

  ejectCoin() {
    this.state.ejectCoin();
  }

  selectItem() {
    this.state.selectItem();
  }

  dispenseItem() {
    this.state.dispenseItem();
  }
}

const vendingMachine = new VendingMachine();

vendingMachine.insertCoin(); // Output: Coin inserted. You can now select an item.
vendingMachine.selectItem(); // Output: Please insert a coin first.
vendingMachine.ejectCoin(); // Output: Coin ejected. You can select another item or retrieve your coin.
vendingMachine.dispenseItem(); // Output: Please insert a coin and select an item.

vendingMachine.insertCoin(); // Output: Coin inserted. You can now select an item.
vendingMachine.selectItem(); // Output: Item selected. Please retrieve your item.

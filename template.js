/**
 * Template
 *
 * - abstract class with a method
 *
 * - this is basically inheritance!!
 */

class AuditTrail {
  record() {
    console.log("audit");
  }
}

class Task {
  // abstract
  constructor(auditTrail) {
    this.auditTrail = auditTrail;
  }

  execute() {
    this.auditTrail.record();

    // determined by subclasses
    this.doExecute();
  }

  //   doExecute() {}
}

class TransferMoneyTask extends Task {
  doExecute() {
    console.log("transfer money");
  }
}

const task = new TransferMoneyTask(new AuditTrail());
task.execute();

// execute() called inside transfermoneytask
// goes up to Task
// record()
// !?!??!?!!?!?

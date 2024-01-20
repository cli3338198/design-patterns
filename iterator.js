/**
 * Iterator
 *
 * - eg. history, want to go back in browser history
 *
 * - similar to an abstract generator in js
 * - create an iterator class that is responsible to iteration
 *  - next(), current(), hasNext()
 */

// example 1

// class BrowserHistory {
//   constructor() {
//     this.urls = []; // if this data structure is changed, it'll break
//   }

//   push(url) {
//     this.urls.push(url);
//   }

//   pop() {
//     return this.urls.pop();
//   }

//   getUrls() {
//     return this.urls;
//   }
// }

// const history = new BrowserHistory();
// history.push("a");
// history.push("b");
// history.push("c");

// for (let i = 0; i < history.getUrls().length; i++) {
//   const url = history.getUrls()[i];
//   console.log(url);
// }

// example 2

// class Iterator {
//   // abstract
//   next() {}
//   current() {}
//   isDone() {}
// }

// class ListIterator extends Iterator {
//   // concrete
//   next() {}
//   current() {}
//   isDone() {}
// }

// class LinkedListIterator extends Iterator {
//   // concrete
//   next() {}
//   current() {}
//   isDone() {}
// }

// class BrowserHistory {
//   push(url) {}
//   pop() {}
//   createIterator() {} // returns a new iterator
// }

// example 3

// class Iterator {
//   hasNext() {}
//   current() {}
//   next() {}
// }

// class ListIterator extends Iterator {
//   constructor(history) {
//     this.history = history;
//     this.index = 0;
//   }

//   hasNext() {
//     return this.index < this.history.length;
//   }

//   current() {
//     return this.history[this.index];
//   }

//   next() {
//     this.index++;
//   }
// }

// class LinkedListIterator extends Iterator {
//   constructor(node) {
//     this.node = node;
//   }

//   hasNext() {
//     return !!this.node.next;
//   }

//   current() {
//     return this.node;
//   }

//   next() {
//     this.node = this.node.next;
//   }
// }

// class BrowserHistory {
//   constructor(history) {
//     this.history = history;
//   }

//   push(url) {
//     this.history.push(url);
//   }

//   pop() {
//     this.history.pop();
//   }

//   createIterator(type) {
//     return type === "LIST"
//       ? new ListIterator(this.history)
//       : new LinkedListIterator(this.history);
//   }
// }

// example 4

// state && iterators!!

class Node {
  constructor(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = null;
  }
}

class Iterator {
  // abstract
  hasNext() {}
  current() {}
  next() {}
}

class ListIterator extends Iterator {
  // concrete
  constructor(history) {
    super();
    this.history = history;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.history.length;
  }

  current() {
    return this.history[this.index];
  }

  next() {
    this.index++;
  }

  push(url) {
    this.history.push(url);
  }

  pop() {
    this.index--;
    return this.history.pop();
  }
}

class LinkedListIterator extends Iterator {
  // concrete
  constructor(head) {
    super();
    this.head = head;
    this.tail = head;

    while (this.tail.next) {
      this.tail = this.tail.next;
    }
  }

  hasNext() {
    return this.head.next !== null;
  }

  current() {
    return this.head;
  }

  next() {
    this.head = this.head.next;
  }

  push(node) {
    // need doubly linked list
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  pop() {
    const tail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    tail.prev = null;
    return tail;
  }
}

class BrowserHistory {
  constructor(type, history) {
    this.iterator =
      type === "LIST"
        ? new ListIterator(history)
        : new LinkedListIterator(history);
  }

  push(url) {
    this.iterator.push(url);
  }

  pop() {
    this.iterator.pop();
  }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
a.next = b;
b.next = c;
b.prev = a;
c.prev = b;

const b1 = new BrowserHistory("LIST", [11, 22, 33]);
const b2 = new BrowserHistory("LINKED LIST", a);

b1.push(44);
b1.push(55);

b2.push(new Node(31));
b2.push(new Node(41));
b2.pop();

while (b1.iterator.hasNext()) {
  const url = b1.iterator.current();
  console.log(url);
  b1.iterator.next();
}

while (b2.iterator.hasNext()) {
  const url = b2.iterator.current();
  console.log(url);
  b2.iterator.next();
}

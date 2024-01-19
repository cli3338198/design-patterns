/**
 * Memento
 *
 * - behavioral?
 * - like undo
 *
 * Editor ...> EditorState
 * History ---> EditorState
 *
 */

class EditorState {
  // Memento
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

class History {
  // Caretaker
  constructor() {
    this.states = []; // stores editorStates
  }

  /**
   *
   * @param {EditorState} state
   */
  push(state) {
    this.states.push(state);
  }

  pop() {
    return this.states.pop();
  }
}

class Editor {
  // Originator
  constructor() {
    this.content = "";
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  createState() {
    return new EditorState(this.content);
  }

  /**
   *
   * @param {EditorState} state
   */
  restoreState(state) {
    this.content = state.getContent();
  }
}

const editor = new Editor();
const history = new History();

editor.setContent("a");
history.push(editor.createState());

editor.setContent("b");
history.push(editor.createState());

editor.setContent("c");
editor.restoreState(history.pop());

console.log(editor.getContent());

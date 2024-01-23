/**
 * Mediator
 */

class UIControl {}

class ListBox extends UIControl {
  constructor() {
    this.selection = null;
  }

  getSelection() {
    return this.selection;
  }

  setSelection(selection) {
    this.selection = selection;
  }
}

class TextBox extends UIControl {
  constructor() {
    this.content = null;
  }

  getContent() {
    return this.content;
  }

  setContent(content) {
    this.content = content;
  }
}

class TextBox extends UIControl {
  constructor() {
    this.enabled = false;
  }

  isEnabled() {
    return this.enabled;
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }
}

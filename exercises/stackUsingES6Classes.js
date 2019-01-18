// Implement a Stack using ES6 Classes

const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  get count() {
    _items.get(this).length;
  }

  push(value) {
    _items.get(this).push(value);
  }

  pop() {
    return _items.get(this).length > 0
      ? _items.get(this).pop()
      : (() => {
          throw new Error("no items to pop...");
        })();
  }

  peek() {
    return _items.get(this)[_items.get(this).length - 1];
  }
}

const s = new Stack();

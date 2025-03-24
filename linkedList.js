export class Node {
  constructor(key) {
    this.key = key;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(key) {
    const node = new Node(key);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}
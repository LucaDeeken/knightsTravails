export class Node {
  constructor(key) {
    this.key = key;
    this.arrayWithPositions = [];
    this.firsNumArr = [1, 1, -1, -1, 2, 2, -2, -2];
    this.secondNumArr = [2, -2, -2, 2, 1, -1, -1, 1];
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
    console.log(key);
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

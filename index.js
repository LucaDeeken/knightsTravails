import { LinkedList } from "./linkedList.js";

class chessBoard {
  constructor() {
    this.queue = [];
    this.firsNumArr = [1, 1, -1, -1, 2, 2, -2, -2];
    this.secondNumArr = [2, -2, -2, 2, 1, -1, -1, 1];
    this.board = [];
    for (let i = 0; i < 8; i++) {
      let array = [];
      for (let j = 0; j < 8; j++) {
        let linkedList = new LinkedList();
        let combined = String(i) + String(j);
        let arrayOutput = this.giveOptions(combined);
        let lengthOfArray = arrayOutput.length;

        for (let k = 0; k < lengthOfArray; k++) {
          linkedList.append(arrayOutput[k]);
        }
        array.push(linkedList);
      }
      this.board.push(array);
    }
  }
  //takes an input coordinate and returns an array that tells, which fields can be reached from this point
  giveOptions(cordinate) {
    let arrayWithPositions = [];
    let cordsfirstNum = Number(cordinate.toString()[0]);
    let cordssecondNum = Number(cordinate.toString()[1]);

    for (let i = 0; i < 8; i++) {
      let firstOne = cordsfirstNum + this.firsNumArr.shift();
      let secondOne = cordssecondNum + this.secondNumArr.shift();
      if (firstOne < 0 || secondOne < 0 || firstOne > 7 || secondOne > 7) {
        continue;
      }
      let final = String(firstOne) + String(secondOne);
      arrayWithPositions.push(final);
    }
    this.firsNumArr = [1, 1, -1, -1, 2, 2, -2, -2];
    this.secondNumArr = [2, -2, -2, 2, 1, -1, -1, 1];
    return arrayWithPositions;
  }
  //returns an array that shows the shortest path from start- to destinationField
  findPath(start, destination) {
    let string = String(start.shift());
    let stringTwo = String(start.shift());
    start = string + stringTwo;

    string = String(destination.shift());
    stringTwo = String(destination.shift());
    destination = string + stringTwo;

    this.queue.push({ position: start, path: [] });
    const doubles = [start];
    let wholePath = [];
    const findPathRecursive = (queue) => {
      let toFind = queue.shift();
      let arrayWithPositions = this.giveOptions(toFind.position);
      let found = arrayWithPositions.find((el) => el === destination);
      if (found != undefined) {
        wholePath = [...toFind.path, toFind.position, found];
        return wholePath;
      } else {
        while (arrayWithPositions.length > 0) {
          const arrElement = arrayWithPositions.shift();
          const fieldAlreadyUsed = doubles.find((el) => el === arrElement);
          if (fieldAlreadyUsed === undefined) {
            queue.push({
              position: arrElement,
              path: [...toFind.path, toFind.position],
            });
            doubles.push(arrElement);
          } else {
          }
        }
      }
      findPathRecursive(queue);
      return;
    };
    findPathRecursive(this.queue);
    return wholePath;
  }
}

const newBoard = new chessBoard();
console.log(newBoard.findPath([0, 0], [0,0]));

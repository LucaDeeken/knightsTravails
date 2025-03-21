import { Node, LinkedList } from "./linkedList.js";

class chessBoard {
  constructor() {
    this.firsNumArr = [1, 1, -1, -1, 2, 2, -2, -2];
    this.secondNumArr = [2, -2, -2, 2, 1, -1, -1, 1];
    this.board = [];
    for (let i = 0; i < 8; i++) {
      let array = [];
      for (let j = 0; j < 8; j++) {
        let linkedList = new LinkedList();

        let combined = String(i) + String(j);
        console.log(combined);
        let arrayOutput = this.giveOptions(combined);
        console.log(arrayOutput);
        let lengthOfArray = arrayOutput.length;
        console.log(lengthOfArray);

        for (let k = 0; k < lengthOfArray; k++) {
            console.log(k);
            console.log(arrayOutput[k]);
          linkedList.append(arrayOutput[k]);
        }
        array.push(linkedList);
        console.log(array);
      }
      this.board.push(array);
    }
  }

  giveOptions(cordinate) {
    console.log(cordinate);
    let arrayWithPositions = [];
    let cordsfirstNum = Number(cordinate.toString()[0]);
    let cordssecondNum = Number(cordinate.toString()[1]);

    for (let i = 0; i < 8; i++) {
        console.log(this.firsNumArr);
      let firstOne = cordsfirstNum + this.firsNumArr.shift();
      console.log(firstOne);
      let secondOne = cordssecondNum + this.secondNumArr.shift();
      if (firstOne < 0 || secondOne < 0 || firstOne > 7 || secondOne > 7) {
        continue;
      }
      let final = String(firstOne) + String(secondOne);
      arrayWithPositions.push(final);
    }
    console.log(arrayWithPositions);
    this.firsNumArr = [1, 1, -1, -1, 2, 2, -2, -2];
    this.secondNumArr = [2, -2, -2, 2, 1, -1, -1, 1];
    return arrayWithPositions;
  }
}

const newBoard = new chessBoard();
console.log(newBoard);

// levelOrder(callback) {
//     if (typeof callback != "function") {
//       throw new Error("You need to attach a callback-function!");
//     }
//     let root = this.root;
//     this.evenCount = 0;
//     if (root === null) {
//       return null;
//     }

//     function queueWork(queue) {
//       if (queue.length === 0) {
//         return;
//       }

//       let currentNode = queue.shift();
//       callback(currentNode);
//       if (currentNode.left != null) {
//         let currentNodeLeft = currentNode.left;
//         queue.push(currentNodeLeft);
//       }
//       if (currentNode.right != null) {
//         let currentNodeLeft = currentNode.right;
//         queue.push(currentNodeLeft);
//       }

//       return queueWork(queue);
//     }

//     queueWork([this.root]);
//     console.log(this.evenCount);
//   }

## Knight's Shortest Path Finder
This program implements a solution to find the shortest path for a knight on a standard 8×8 chessboard, from a given start position to an end position. It utilizes a **recursive method** combined with a **queue** to explore the possible moves. The knight's movements are calculated based on the classical L-shaped moves allowed in chess.

Additionally, a **LinkedList** was implemented for the sake of practice, although it is not strictly necessary for this problem. This serves as an exercise in working with more advanced data structures.

## Usage
To use the function, simply create an instance of the chessBoard class and call the findPath method with the start and end coordinates as input. For example:

`console.log(newBoard.findPath([0, 0], [7, 0]));`

This will return the shortest sequence of moves for the knight to reach the destination.

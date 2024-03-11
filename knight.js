function knightMoves(startPos, endPos) {
  function getMoves([x, y]) {
    return [
      [1, -2],
      [-1, -2],
      [2, -1],
      [-2, -1],
      [1, 2],
      [-1, 2],
      [2, 1],
      [-2, 1],
    ]
      .map(([moveA, moveB]) => [moveA + x, moveB + y])
      .filter(
        ([moveA, moveB]) => moveA >= 0 && moveA < 8 && moveB >= 0 && moveB < 8
      );
  }

  function getPath(start, end, visited) {
    if (start === end) {
      return [end];
    } else {
      return getPath(start, visited.get(end).toString(), visited).concat([end]);
    }
  }

  function getNextMoves(currentPos, visited) {
    return getMoves(currentPos).filter(
      (moves) =>
        !visited.has(moves.toString()) &&
        visited.set(moves.toString(), currentPos)
    );
  }

  function knightPath(start, end, queue = [start], visited = new Map()) {
    if (!queue.length) {
      return getPath(start.toString(), end.toString(), visited);
    } else {
      return knightPath(
        start,
        end,
        queue.slice(1).concat(getNextMoves(queue[0], visited)),
        visited
      );
    }
  }
  return knightPath(startPos, endPos);
}

console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));

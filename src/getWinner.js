const countChess = (board, x, y, directionX, directionY) => {
  const currentChess = board[y][x];
  let tempX = x + directionX;
  let tempY = y + directionY;
  let total = 0;

  while (board[tempY] && board[tempY][tempX] === currentChess) {
    tempX += directionX;
    tempY += directionY;
    total++;
  }
  return total;
}

const getWinner = (board, x, y) => {
  if (
    countChess(board, x, y, 0, 1) + countChess(board, x, y, 0, -1) >= 4 ||
    countChess(board, x, y, 1, 0) + countChess(board, x, y, -1, 0) >= 4 ||
    countChess(board, x, y, 1, 1) + countChess(board, x, y, -1, -1) >= 4 ||
    countChess(board, x, y, 1, -1) + countChess(board, x, y, -1, 1) >= 4
  ) {
    return board[y][x]; // 回傳黑子還是白子
  }
}

export default getWinner;
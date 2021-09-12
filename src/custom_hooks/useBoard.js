import { useState, useRef, useEffect } from 'react';
import getWinner from '../getWinner';

const BOARD_SIZE = 19;

const useBoard = () => {
  // board[y][x] 來存黑子白子
  const [board, setBoard] = useState(
    Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(null)));
  const [winner, setWinner] = useState(null);

  const isBlackNext = useRef(true);
  const currentX = useRef();
  const currentY = useRef();

  const handleUpdateBoard = (x, y, result) => {
    setBoard(
      board.map((row, currentY) => {
        if (currentY !== y) return row;

        return row.map((col, currentX) => {
          if (currentX !== x) return col;
          return result;
        })
      })
    );
  };

  const handleChessClick = (x, y, value) => {
    // 已經有存棋子的
    if (value) return;

    currentX.current = x;
    currentY.current = y;
    handleUpdateBoard(x, y, isBlackNext.current ? 'black' : 'white');
    isBlackNext.current = !isBlackNext.current; // 換人
  };

  // 棋盤都全渲染好後判斷輸贏
  useEffect(() => {
    if (!currentX.current || !currentY.current) return;

    setWinner(getWinner(board, currentX.current, currentY.current));
  }, [board]);

  return {
    board,
    winner,
    isBlackNext,
    handleChessClick
  }
};

export default useBoard;
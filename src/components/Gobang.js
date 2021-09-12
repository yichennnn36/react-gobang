import styled from 'styled-components';

const Square = styled.div`
  width: 32px;
  height: 32px;
  background: #BC9272;
  position: relative;
  
  // 格線直線
  &::before {
    content: '';
    height: 100%;
    width: 2px;
    background: #615754;
    position: absolute;
    top: 0;
    left: 50%;

    // 上下邊界
    ${props => props.rowIndex === 0 && `height: 50%; top: 50%;`};
    ${props => props.rowIndex === 18 && `height: 50%;`}
  }
  // 格線橫線
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #615754;
    position: absolute;
    top: 50%;

    // 左右邊界
    ${props => props.colIndex === 0 && `width: 50%; left: 50%;`};
    ${props => props.colIndex === 18 && `width: 55%;`};
  }
`;

const ChessItem = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  transform: scale(0.8);
  top: 0;
  left: 3%;
  z-index: 1;

  // 判斷黑白棋
  ${props => props.value === 'black' && `
    background: black; box-shadow: 3px 3px 6px #666;`};
  ${props => props.value === 'white' && `
    background: white; box-shadow: 3px 3px 6px #666;`};

  // hover 陰影
  ${props => !props.value && `
    &:hover {
      background: rgba(0, 0, 1, 0.2);
    }
  `}
`;

const Gobang = ({ rowIndex, colIndex, board, handleChessClick, winner }) => {
  const value = board[rowIndex][colIndex];
  const handleClick = () => {
    if (winner) return;
    handleChessClick(colIndex, rowIndex, value);
  };

  return (
    <Square rowIndex={rowIndex} colIndex={colIndex} onClick={handleClick}>
      <ChessItem value={value} />
    </Square>
  );
};

export default Gobang;
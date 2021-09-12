import React from 'react';
import styled from 'styled-components';
import './index.css';

import useBoard from './custom_hooks/useBoard';
import Gobang from './components/Gobang';
import GameInfo from './components/GameInfo';

const Board = styled.div`
  display: inline-block;
  margin-right: 40px;
`;

const Row = styled.div`
  display: flex;
`;

const Footer = styled.div`
  width: 100%;
  background: black;
  padding: 16px 0;
  color: white;
  font-size: 14px;
  text-align: center;
  margin-top: 120px;

  @media screen and (min-width: 1000px) {
    margin-top: 0;
  }
`;

const Game = () => {
  const { board, winner, isBlackNext, handleChessClick } = useBoard();

  return (
    <>
      <div className="game">
        <Board>
          {
            board.map((row, y) => {
              return (
                <Row key={y}>
                  {
                    row.map((col, x) => {
                      return (
                        <Gobang
                          key={x}
                          rowIndex={y}
                          colIndex={x}
                          board={board}
                          handleChessClick={handleChessClick}
                          winner={winner}
                        />
                      )
                    })
                  }
                </Row>
              )
            })
          }
        </Board>
        <GameInfo isBlackNext={isBlackNext.current} winner={winner} />
      </div>
      <Footer>
        Copyright © 2021 YichenLiu Gobang All rights Reserved.
      </Footer>
    </>
  );
};

export default Game;

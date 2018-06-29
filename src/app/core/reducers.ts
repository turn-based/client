import { ActionReducerMap } from '@ngrx/store';
import { GameActionsUnion } from './game-actions';
import { CreateGameReducer, Game } from 'boardgame.io/dist/core';
import { AI } from 'boardgame.io/dist/ai';
import { Client as RawClient } from 'boardgame.io/dist/client';
import { TicTacToe } from 'boardgame.io-pure-games';

export interface State {
  game: any;
}

export const reducers: ActionReducerMap<State, GameActionsUnion> = {
  game: CreateGameReducer({game: TicTacToe, numPlayers: 2, multiplayer: false})
};
const ai = AI({
  enumerate: G => {
    let r = [];
    for (let i = 0; i < 9; i++) {
      if (G.cells[i] === null) {
        r.push({ move: 'clickCell', args: [i] });
      }
    }
    return r;
  },
});

export function Client(board) {
  return function WrappedBoard() {
    return RawClient({
      game: TicTacToe,
      ai,
      // gameID: props.gameID,
      // playerID: props.playerID,
      // credentials: props.credentials,
    });
  }
}


import { ActionReducerMap } from '@ngrx/store';
import { GameActionsUnion } from './game-actions';
import { CreateGameReducer, Game } from 'boardgame.io/dist/core';

/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pos of positions) {
    const symbol = cells[pos[0]];
    let winner = symbol;
    for (let i of pos) {
      if (cells[i] != symbol) {
        winner = null;
        break;
      }
    }
    if (winner != null) return true;
  }

  return false;
}

const TicTacToe = Game({
  name: 'tic-tac-toe',

  setup: () => ({
    cells: Array(9).fill(null),
  }),

  moves: {
    clickCell(G, ctx, id) {
      const cells = [...G.cells];

      if (cells[id] === null) {
        cells[id] = ctx.currentPlayer;
      }

      return { ...G, cells };
    },
  },

  flow: {
    movesPerTurn: 1,

    endGameIf: (G, ctx) => {
      if (IsVictory(G.cells)) {
        return ctx.currentPlayer;
      }
    },
  },
});

export interface State {
  game: any;
}

export const reducers: ActionReducerMap<State, GameActionsUnion> = {
  game: CreateGameReducer({game: TicTacToe, numPlayers: 2, multiplayer: false})
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

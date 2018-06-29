import { ActionReducerMap } from '@ngrx/store';
import { GameActionsUnion } from './game-actions';
import { CreateGameReducer, Game } from 'boardgame.io/dist/core';
import { TicTacToe } from 'boardgame.io-pure-games';

export interface State {
  game: any;
}

export const reducers: ActionReducerMap<State, GameActionsUnion> = {
  game: CreateGameReducer({game: TicTacToe, numPlayers: 2, multiplayer: false})
};

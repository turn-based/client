import { Action } from '@ngrx/store';

export enum GameActionTypes {
  MOVE = 'MAKE_MOVE',
  EVENT = 'GAME_EVENT',
  RESTORE = 'RESTORE',
  RESET = 'RESET',
  UNDO = 'UNDO',
  REDO = 'REDO',
}

export interface IChangeRequestPayload {
  type: string;
  args: any[];
  playerID?: '0' | '1' | '2' | '3';
}

export class Move implements Action {
  readonly type = GameActionTypes.MOVE;

  constructor(public payload: IChangeRequestPayload) {}
}

export class Event implements Action {
  readonly type = GameActionTypes.EVENT;

  constructor(public payload: IChangeRequestPayload) {}
}

export class Restore implements Action {
  readonly type = GameActionTypes.RESTORE;

  constructor(public state: any) {}
}

export class Reset implements Action {
  readonly type = GameActionTypes.RESET;
}

export class Undo implements Action {
  readonly type = GameActionTypes.UNDO;
}

export class Redo implements Action {
  readonly type = GameActionTypes.REDO;
}

export type GameActionsUnion = Move | Event | Restore | Reset | Undo | Redo;

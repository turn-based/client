import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IGameType {
  id: string;
  name: string;
  minNumOfPlayers: number;
  maxNumOfPlayers: number;
  color: string;
}

export interface IPlayerForLobby {
  isOpen: boolean;
}

export interface IRoomForLobby {
  id: string;
  gameType: IGameType;
  players: IPlayerForLobby[];
}


export interface IUser {
  name: string;
}

export const HUMAN: 'HUMAN' = 'HUMAN';
export const ROBOT: 'ROBOT' = 'ROBOT';

export interface IUserPlayerMeta {
  type: 'HUMAN';
  user: IUser;
}

export interface IRobotPlayerMeta {
  type: 'ROBOT';
}

export type PlayerMeta = IUserPlayerMeta | IRobotPlayerMeta;


export interface IRoomStats {
  totalGames: number;
}

export const ROOM_PRE_GAME: 'PRE_GAME' = 'PRE_GAME';
export const ROOM_IN_PROGRESS: 'IN_PROGRESS' = 'IN_PROGRESS';
export type RoomStatus = 'PRE_GAME' | 'IN_PROGRESS';

export interface IRoom {
  id: string;
  playersMeta: PlayerMeta[];
  gameType: IGameType;
  status: RoomStatus;
  game: any;
  stats: IRoomStats
}

@Injectable()
export class TbsService {

  constructor() {
  }

  getGameTypes(): Observable<IGameType[]> {
    return of([
      {
        id: '1',
        name: 'tic-tac-toe',
        color: 'red',
        minNumOfPlayers: 2,
        maxNumOfPlayers: 2,
      },
      {
        id: '2',
        name: 'reversi',
        color: 'blue',
        minNumOfPlayers: 2,
        maxNumOfPlayers: 2,
      }
    ]);
  }

  startGame(id: string): Observable<string> {
    return of(`for-gameType-${id}`);
  }

  getRooms(): Observable<IRoomForLobby[]> {
    return of([{
      id: '1',
      gameType: {
        id: '1',
        name: 'tic-tac-toe',
        color: 'red',
        minNumOfPlayers: 2,
        maxNumOfPlayers: 2,
      },
      players: [{isOpen: true}, {isOpen: true}, {isOpen: true}]
    },
      {
        id: '22',
        gameType: {
          id: '1',
          name: 'tic-tac-toe',
          color: 'red',
          minNumOfPlayers: 2,
          maxNumOfPlayers: 2,
        },
        players: [{isOpen: true}, {isOpen: false}, {isOpen: false}]
      }]);
  }

  getRoom(roomId: string): Observable<IRoom> {
    return of({
      id: roomId,
      playersMeta: [{type: HUMAN, user: {name: 'me!'}}, {type: ROBOT}],
      gameType: {
        id: '1',
        name: 'tic-tac-toe',
        color: 'red',
        minNumOfPlayers: 2,
        maxNumOfPlayers: 2,
      },
      status: ROOM_PRE_GAME,
      game: {} ,
      stats: {
        totalGames: 0
      }
    });
  }
}

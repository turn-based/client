import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface IGameType {
  id: string;
  name: string;
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

@Injectable()
export class TbsService {

  constructor() {
  }

  getGameTypes(): Observable<IGameType[]> {
    return of([
      {
        id: '1',
        name: 'tic-tac-toe',
        color: 'red'
      },
      {
        id: '2',
        name: 'reversi',
        color: 'blue',
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
        color: 'red'
      },
      players: [{isOpen: true}, {isOpen: true}, {isOpen: true}]
    },
      {
        id: '22',
        gameType: {
          id: '1',
          name: 'tic-tac-toe',
          color: 'red'
        },
        players: [{isOpen: true}, {isOpen: false}, {isOpen: false}]
      }]);
  }
}

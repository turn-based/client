import { Component } from '@angular/core';
import { TicTacToe } from 'boardgame.io-pure-games';
import { TicTacToeBoardComponent } from './tic-tac-toe-board.component';

@Component({
  template: `
    <div fxLayout fxLayoutGap="32px">
      <app-client [game]="TicTacToe"
                  [board]="TicTacToeBoardComponent"
                  [debug]="false"
                  [multiplayer]="{server: 'localhost:8000'}"
                  gameID="multi"
                  playerID="0"></app-client>
      <app-client [game]="TicTacToe"
                  [board]="TicTacToeBoardComponent"
                  [debug]="false"
                  [multiplayer]="{server: 'localhost:8000'}"
                  gameID="multi"
                  playerID="1"></app-client>
    </div>
    
  `
})
export class MultiPlayerExampleComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;


}

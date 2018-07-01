import { Component } from '@angular/core';
import { TicTacToe } from 'boardgame.io-pure-games';
import { TicTacToeBoardComponent } from './tic-tac-toe-board.component';

@Component({
  template: `
    <app-client [game]="TicTacToe"
                [board]="TicTacToeBoardComponent"
                [debug]="false"
                [multiplayer]="true"
                gameID="multi"
                playerID="0"></app-client>
    <app-client [game]="TicTacToe"
                [board]="TicTacToeBoardComponent"
                [debug]="false"
                [multiplayer]="true"
                gameID="multi"
                playerID="1"></app-client>
    
  `
})
export class MultiPlayerExampleComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;


}

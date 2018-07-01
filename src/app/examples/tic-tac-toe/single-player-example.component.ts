import { Component } from '@angular/core';
import { TicTacToe } from 'boardgame.io-pure-games';
import { TicTacToeBoardComponent } from './tic-tac-toe-board.component';
import { ai } from './ai';

@Component({
  template: `
    <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
      <strong>Single Player</strong>
      <app-client [game]="TicTacToe"
                  [board]="TicTacToeBoardComponent"
                  [ai]="ai"
                  gameID="gameID"></app-client>
    </div>
  `
})
export class SinglePlayerExampleComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;
  ai = ai;
}

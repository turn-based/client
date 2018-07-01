import { Component, Input } from '@angular/core';
import { TicTacToe } from "boardgame.io-pure-games";
import { TicTacToeBoardComponent } from './tic-tac-toe-board.component';
import { ai } from './ai';

@Component({
  template: `
    <app-client [game]="TicTacToe"
                [board]="TicTacToeBoardComponent"
                [ai]="ai"
                gameID="gameID"></app-client>
  `
})
export class SinglePlayerExampleComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;
  ai = ai;
}

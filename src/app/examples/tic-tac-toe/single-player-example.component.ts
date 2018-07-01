import { Component } from '@angular/core';
import { TicTacToe } from "boardgame.io-pure-games";
import { TicTacToeBoardComponent } from './tic-tac-toe-board.component';
import { ai } from './ai';

@Component({
  template: `
    <app-client gameId="single" [Game]="TicTacToe" [ai]="ai" [board]="TicTacToeBoardComponent"></app-client>
  `
})
export class SinglePlayerExampleComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;
  ai = ai;
}

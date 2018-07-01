import { Component } from '@angular/core';
import { TicTacToe } from 'boardgame.io-pure-games';
import { TicTacToeBoardComponent } from './tic-tac-toe-board.component';
import { ai } from './ai';

@Component({
  template: `
    not implemented
  `
})
export class MultiPlayerExampleComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;
  ai = ai;
}

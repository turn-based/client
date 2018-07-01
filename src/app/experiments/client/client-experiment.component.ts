import { Component } from '@angular/core';

import { ai } from '../../core/reducers';
import { TicTacToe } from 'boardgame.io-pure-games';
import { TicTacToeBoardComponent } from '../../games/tic-tac-toe/board/tic-tac-toe-board.component';

@Component({
  selector: 'app-client-experiment',
  template: `    
    <app-client gameId="single" [Game]="TicTacToe" [ai]="ai" [board]="TicTacToeBoardComponent"></app-client>
  `
})
export class ClientExperimentComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;
  ai = ai;

}

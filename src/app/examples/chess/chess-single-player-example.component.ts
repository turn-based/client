import { Component } from '@angular/core';
import { Chess } from 'boardgame.io-pure-games';
import { ChessBoardComponent } from './chess-board.component';

@Component({
  template: `    
    <app-client [game]="Chess"
                [board]="ChessBoardComponent"
                gameID="gameID"></app-client>
    
  `
})
export class ChessSinglePlayerExampleComponent {
  Chess = Chess;
  ChessBoardComponent = ChessBoardComponent;
}

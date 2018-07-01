import { Component } from '@angular/core';
import { TicTacToe } from 'boardgame.io-pure-games';
import { TicTacToeBoardComponent } from './tic-tac-toe-board.component';

@Component({
  template: `
    <div fxLayout fxLayoutGap="32px">
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
        <strong>playerID 0</strong>
        <app-client [game]="TicTacToe"
                    [board]="TicTacToeBoardComponent"
                    [debug]="false"
                    [multiplayer]="{server: 'localhost:8000'}"
                    gameID="spectator"
                    playerID="0"></app-client>
      </div>
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
        <strong>playerID 1</strong>
        <app-client [game]="TicTacToe"
                    [board]="TicTacToeBoardComponent"
                    [debug]="false"
                    [multiplayer]="{server: 'localhost:8000'}"
                    gameID="spectator"
                    playerID="1"></app-client>
      </div>
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
        <strong>Spectator</strong>
        <app-client [game]="TicTacToe"
                    [board]="TicTacToeBoardComponent"
                    [debug]="false"
                    [multiplayer]="{server: 'localhost:8000'}"
                    gameID="spectator"
                    playerID="1"></app-client>
      </div>
    </div>
  `
})
export class SpectatorExampleComponent {
  TicTacToe = TicTacToe;
  TicTacToeBoardComponent = TicTacToeBoardComponent;
}

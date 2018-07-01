import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';
import { Client as RawClient } from 'boardgame.io/dist/client';
import { TicTacToeBoardComponent } from '../../games/tic-tac-toe/board/tic-tac-toe-board.component';


@Component({
  selector: 'app-client',
  template: `
    <div>gameId<{{gameId}}> | playerId<{{playerId}}></div>
      <div fxLayout fxLayoutGap="16px" fxLayoutAlign="space-between" *ngxInit="rawClient.getState() as state">

        <ng-container *ngComponentOutlet="board;
                                          ndcDynamicInputs: {
                                            G: state.G,
                                            ctx: state.ctx
                                          };
                                          ndcDynamicOutputs: {
                                            cellClicked: rawClient.moves.clickCell
                                          }">
        </ng-container>
        
        <ngx-json-viewer [json]="state"></ngx-json-viewer>
      </div>
  `
})
export class ClientComponent implements OnInit {
  @Input() board: any;

  @Input() Game: any;
  @Input() ai: any;
  @Input() gameId: string = 'default';
  @Input() playerId: string = null;

  private rawClient: any;

  ngOnInit() {
    this.rawClient = RawClient({
      game: this.Game,
      ai: this.ai,
      gameID: this.gameId,
      playerID: this.playerId,
    });
  }
}

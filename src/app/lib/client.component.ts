import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { Client as RawClient, Debug } from 'boardgame.io/dist/client';

@Component({
  selector: 'app-client',
  template: `
    <ng-container *ngxInit="rawClient.getState() as state">
      <ng-container *ngComponentOutlet="board;
                                            ndcDynamicInputs: {
                                              G: state.G,
                                              ctx: state.ctx
                                            };
                                            ndcDynamicOutputs: {
                                              cellClicked: rawClient.moves.clickCell
                                            }">
      </ng-container>
    </ng-container>

    <app-debug *ngIf="rawClient"
               [gamestate]="rawClient.getState()"
               [gameID]="gameId"
               [playerID]="playerId"
               [moves]="rawClient.moves"
               [events]="rawClient.events"
               [store]="rawClient.store"
               [step]="rawClient.step"
               [reset]="rawClient.reset"
               [reducer]="rawClient.reducer"
    ></app-debug>
  `
})
export class ClientComponent implements OnInit, AfterContentInit {
  @Input() board: any;

  @Input() Game: any;
  @Input() ai: any;
  @Input() gameId: string = 'default';
  @Input() playerId: string = null;

  rawClient: any;

  ngOnInit() {
    this.rawClient = RawClient({
      game: this.Game,
      ai: this.ai,
      gameID: this.gameId,
      playerID: this.playerId,
    });

    this.rawClient.subscribe(() => {
      console.log('rawClient.subscribe triggered');
    });
  }

  ngAfterContentInit() {
    this.rawClient.connect();
  }
}

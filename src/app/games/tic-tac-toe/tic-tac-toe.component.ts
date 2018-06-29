import { Component, OnDestroy, OnInit } from '@angular/core';
import { createFeatureSelector, select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { State } from '../../core/reducers';
import { Move } from '../../core/game-actions';

export const selectTicTacToe = createFeatureSelector<State>('tic-tac-toe');

@Component({
  selector: 'app-tic-tac-toe',
  template: `
    <div fxLayout fxLayoutGap="16px" fxLayoutAlign="space-between">
      <app-tic-tac-toe-board [G]="game.G" [ctx]="game.ctx" (cellClicked)="onCellClicked($event)"></app-tic-tac-toe-board>

      <ngx-json-viewer [json]="game"></ngx-json-viewer>
    </div>
  `,
})
export class TicTacToeComponent implements OnInit, OnDestroy {
  private game: any;

  private _destroy = new Subject();

  constructor(private store: Store<any>) {
    store.pipe(select(selectTicTacToe), takeUntil(this._destroy)).subscribe(({game}) => {
      this.game = game;
    })
  }

  ngOnInit() {
  }

  onCellClicked(id) {
    this.store.dispatch(new Move({type: 'clickCell', args: [id]}));
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }

}

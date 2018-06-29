import { Component, OnDestroy, OnInit } from '@angular/core';
import { createFeatureSelector, select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { State } from '../../core/reducers';
import { Move } from '../../core/game-actions';

export const selectTicTacToe = createFeatureSelector<State>('tic-tac-toe');

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit, OnDestroy {
  state = {
    board: [
      [{isActionable: false, row: 0, col: 0, value: 't'}, {isActionable: true, row: 0, col: 1}, {isActionable: true, row: 0, col: 2}],
      [{isActionable: true, row: 1, col: 0}, {isActionable: true, row: 1, col: 1, value: '3'}, {isActionable: true, row: 1, col: 2}],
      [{isActionable: true, row: 2, col: 0}, {isActionable: true, row: 2, col: 1}, {isActionable: true, row: 2, col: 2}],
    ]
  };
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

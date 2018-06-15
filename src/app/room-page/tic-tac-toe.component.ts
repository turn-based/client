import { Component, Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { TbsService } from '../tbs.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Move, Reset } from '../core/game-actions';

@Component({
  selector: 'app-tic-tac-toe',
  template: `
    <ng-container *ngxInit="(state$ | async) as state">
      <table id="board">
        <tr *ngFor="let i of [0, 1, 2]">
          <ng-container *ngFor="let j of [0, 1, 2]">
              <td *ngxInit="3 * i + j as id" [ngClass]="{active: isActive(state, id)}" (click)="clickCell(id)">{{state.G.cells[id]}}</td>
          </ng-container>
        </tr>
      </table>
      <div>Player: this.props.playerID?</div>
      <div id="winner">Winner: {{state.ctx | json}}</div>;
    </ng-container>
  `,
  styles: [`
    #board {
      border-collapse: collapse;
    }
    #winner {
      margin-top: 25px;
      width: 168px;
      text-align: center;
    }

    td {
      text-align: center;
      font-weight: bold;
      font-size: 25px;
      color: #555;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border: 3px solid #aaa;
      background: #fff;
    }

    td.active {
      cursor: pointer;
      background: #eeffe9;
    }

    td.active:hover {
      background: #eeffff;
    }
  `]
})
export class TicTacToeGameComponent implements OnInit, OnDestroy {
  // state: any;
  _destroy = new Subject();
  state$: any;

  constructor(private route: ActivatedRoute, private tbs: TbsService, private store: Store<{game: any}>) {
    this.state$ = store.pipe(select('game'));//store.pipe(select('game'), takeUntil(this._destroy));

    // .subscribe(state => {this.state = state;});
  }

  isActive(state, id) {
    // console.log(state)
    return state.G.cells[id] != null && state.ctx.gameover === undefined;
  }

  ngOnInit() {
    this.store.dispatch(new Reset());
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  clickCell(id) {
    this.store.dispatch(new Move({type: 'clickCell', args: [id]}));
  }
}

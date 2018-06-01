import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { TbsService } from '../tbs.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Move, Reset } from '../core/game-actions';

@Component({
  selector: 'app-tic-tac-toe',
  template: `
    <table id="board">
      <tr *ngFor="let i of [0, 1, 2]">
        <td *ngFor="let j of [0, 1, 2]" [ngClass]="{active: state.isActive}" (click)="clickCell(3 * i + j)">{{state.G.cells[3 * i + j]}}</td>
      </tr>
    </table>
    <div>Player: this.props.playerID?</div>
    <div id="winner">Winner: {{state.ctx.gameover}}</div>;
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
  state: any;
  _destroy = new Subject();

  constructor(private route: ActivatedRoute, private tbs: TbsService, private store: Store<{game: any}>) {
    store.pipe(select('game'), takeUntil(this._destroy)).subscribe(state => {this.state = state;});
  }

  ngOnInit() {
    this.store.dispatch(new Reset());
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }

  clickCell(id) {
    console.log(id);
    this.store.dispatch(new Move({type: 'clickCell', args: [id], playerID: '0'}));
  }
}

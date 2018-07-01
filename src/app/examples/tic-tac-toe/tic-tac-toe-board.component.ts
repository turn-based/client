import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-board',
  template: `
    <div>
      <table class="tic-tac-toe-board">
          <tr *ngFor="let i of [0, 1, 2]">
            <ng-container *ngFor="let j of [0, 1, 2]">
              <td *ngxInit="3 * i + j as id" [ngClass]="{active: isActive(id)}" (click)="onClick(id)">{{G.cells[id]}}</td>
            </ng-container>
          </tr>
      </table>
      <div *ngIf="!isPreview && playerID !== null">Player: {{playerID}}</div>
      <ng-container *ngIf="ctx.gameover">
        <div class="winner">
          {{ctx.gameover.winner !== undefined ? 'Winner: ' + ctx.gameover.winner : 'Draw!'}}
        </div>
      </ng-container>
      <div *ngIf="!isPreview && isMultiplayer && !isConnected">Disconnected</div>
    </div>
  
  `,
  styleUrls: ['./tic-tac-toe-board.component.scss']
})
export class TicTacToeBoardComponent implements OnInit {
  @Input() G: any;
  @Input() ctx: any;

  @Input() playerID = 'playerId?';
  @Input() isPreview = false;
  @Input() isMultiplayer = false;
  @Input() isConnected = true;

  @Output() cellClicked = new EventEmitter();

  constructor() { }


  onClick(id) {
    if (this.isActive(id)) {
      this.cellClicked.emit(id);
    }
  }

  isActive(id) {
    return this.isActive && this.G.cells[id] === null;
  }

  ngOnInit() {
  }
}

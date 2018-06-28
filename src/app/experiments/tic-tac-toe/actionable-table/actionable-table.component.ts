import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface IIsActionable {
  isActionable: boolean;
}

export interface ITablePosition {
  row: number;
  col: number;
}

export interface IHasValue {
  value?: string;
}

export type Cell = IIsActionable & ITablePosition & IHasValue;

@Component({
  selector: 'app-actionable-table',
  template: `
    <table class="actionable-table">
      <tr *ngFor="let row of table">
        <td *ngFor="let cell of row" [ngClass]="{actionable: cell.isActionable}" (click)="onClick(cell)">
          {{cell.value}}
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./actionable-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionableTableComponent {
  @Input() table: Cell[][];

  @Output() cellClicked = new EventEmitter();

  onClick(cell: IIsActionable & ITablePosition) {
    if (cell.isActionable) {
      this.cellClicked.emit(cell);
    }
  }
}

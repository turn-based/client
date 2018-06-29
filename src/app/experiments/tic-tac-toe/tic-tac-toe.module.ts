import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { RouterModule } from '@angular/router';
import { ActionableTableComponent } from './actionable-table/actionable-table.component';
import { createFeatureSelector, StoreModule } from '@ngrx/store';
import { reducers, State } from '../../core/reducers';
import { TicTacToeBoardComponent } from './board/tic-tac-toe-board.component';
import { NgxInitModule } from 'ngx-init';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    NgxInitModule,
    NgxJsonViewerModule,
    FlexLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: TicTacToeComponent
      }
    ]),

    StoreModule.forFeature('tic-tac-toe', reducers)
  ],
  declarations: [TicTacToeComponent, ActionableTableComponent, TicTacToeBoardComponent]
})
export class TicTacToeModule { }

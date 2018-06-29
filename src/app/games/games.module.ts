import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../core/reducers';
import { TicTacToeBoardComponent } from './tic-tac-toe/board/tic-tac-toe-board.component';
import { NgxInitModule } from 'ngx-init';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    NgxInitModule,
    NgxJsonViewerModule,
    FlexLayoutModule,

    StoreModule.forFeature('tic-tac-toe', reducers)
  ],
  declarations: [TicTacToeComponent, TicTacToeBoardComponent],
  exports: [TicTacToeComponent, TicTacToeBoardComponent],
})
export class GamesModule { }

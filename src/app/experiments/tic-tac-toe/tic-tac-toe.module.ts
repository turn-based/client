import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from '../../games/tic-tac-toe/tic-tac-toe.component';
import { RouterModule } from '@angular/router';
import { GamesModule } from '../../games/games.module';

@NgModule({
  imports: [
    CommonModule,
    GamesModule,

    RouterModule.forChild([
      {
        path: '',
        component: TicTacToeComponent
      }
    ]),
  ]
})
export class TicTacToeModule { }

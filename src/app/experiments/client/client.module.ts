import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientExperimentComponent } from './client-experiment.component';
import { GamesModule } from '../../games/games.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgxInitModule } from 'ngx-init';
import { TicTacToeBoardComponent } from '../../games/tic-tac-toe/board/tic-tac-toe-board.component';
import { DynamicModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientExperimentComponent,
  ],
  imports: [
    CommonModule,
    GamesModule,
    FlexLayoutModule,
    NgxJsonViewerModule,
    NgxInitModule,

    DynamicModule.withComponents([TicTacToeBoardComponent]),

    RouterModule.forChild([
      {
        path: '',
        component: ClientExperimentComponent
      }
    ]),
  ]
})
export class ClientModule { }

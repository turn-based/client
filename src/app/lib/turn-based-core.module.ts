import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxInitModule } from 'ngx-init';
import { DynamicModule } from 'ng-dynamic-component';
import { ClientComponent } from './client.component';
import { TicTacToeBoardComponent } from '../examples/tic-tac-toe/tic-tac-toe-board.component';
import { DebugComponent } from './debug.component';
import { MultiPlayerExampleComponent } from '../examples/tic-tac-toe/multi-player-example.component';

@NgModule({
  declarations: [
    ClientComponent,
    DebugComponent,

    TicTacToeBoardComponent,
    MultiPlayerExampleComponent,
  ],
  imports: [
    CommonModule,

    NgxInitModule,

    DynamicModule.withComponents([
      TicTacToeBoardComponent,
      MultiPlayerExampleComponent
    ]),
  ],
  exports: [
    ClientComponent, TicTacToeBoardComponent,
  ]
})
export class TurnBasedCoreModule {
}

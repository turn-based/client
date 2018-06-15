import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { TicTacToeModule } from './experiments/tic-tac-toe/tic-tac-toe.module';

const routes: Routes = [
  {
    path: 'lobby',
    component: LobbyPageComponent,
  },
  {
    path: 'rooms/:roomId',
    component: RoomPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lobby'
  },
  {
    path: 'experiments/tic-tac-toe',
    loadChildren: './experiments/tic-tac-toe/tic-tac-toe.module#TicTacToeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

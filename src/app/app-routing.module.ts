import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { RoomPageComponent } from './room-page/room-page.component';

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
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

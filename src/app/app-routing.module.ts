import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SinglePlayerExampleComponent } from './examples/tic-tac-toe/single-player-example.component';
import { MultiPlayerExampleComponent } from './examples/tic-tac-toe/multi-player-example.component';

const routes: Routes = [
  {
    path: 'examples',
    component: NavComponent,
    children: [
      {
        path: 'tic-tac-toe/singleplayer',
        component: SinglePlayerExampleComponent,
      },
      {
        path: 'tic-tac-toe/multiplayer',
        component: MultiPlayerExampleComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tic-tac-toe/singleplayer'
      },
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'examples'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

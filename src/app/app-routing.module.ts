import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SinglePlayerExampleComponent } from './examples/tic-tac-toe/single-player-example.component';
import { MultiPlayerExampleComponent } from './examples/tic-tac-toe/multi-player-example.component';
import { AuthenticatedExampleComponent } from './examples/tic-tac-toe/authenticated-example.component';
import { SpectatorExampleComponent } from './examples/tic-tac-toe/spectator-example.component';
import { UnsupportedExampleComponent } from './examples/unsupported-example.component';
import { PhasesExampleComponent } from './examples/phases/phases-example.component';
import { SecretStateExampleComponent } from './examples/secret-state/secret-state-example.component';

const routes: Routes = [
  {
    path: 'examples',
    component: NavComponent,
    children: [
      {
        path: 'tic-tac-toe/singleplayer',
        component: SinglePlayerExampleComponent,
        data: {
          title: 'Tic-Tac-Toe Singleplayer'
        }
      },
      {
        path: 'tic-tac-toe/multiplayer',
        component: MultiPlayerExampleComponent,
        data: {
          title: 'Tic-Tac-Toe Multiplayer'
        }
      },
      {
        path: 'tic-tac-toe/authenticated',
        component: AuthenticatedExampleComponent,
        data: {
          title: 'Tic-Tac-Toe Authenticated'
        }
      },
      {
        path: 'tic-tac-toe/spectator',
        component: SpectatorExampleComponent,
        data: {
          title: 'Tic-Tac-Toe Spectator'
        }
      },
      {
        path: 'phases',
        component: PhasesExampleComponent,
        data: {
          title: 'phases'
        }
      },
      {
        path: 'liars-dice',
        component: SecretStateExampleComponent,
        data: {
          title: 'Liar\'s Dice'
        }
      },
      {
        path: 'unsupported-example',
        component: UnsupportedExampleComponent,
        data: {
          title: 'Unsupported Example'
        }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tic-tac-toe/singleplayer'
      },
      {
        path: '**',
        redirectTo: 'unsupported-example'
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinglePlayerExampleComponent } from './examples/tic-tac-toe/single-player-example.component';
import { TurnBasedCoreModule } from './lib/turn-based-core.module';
import { MultiPlayerExampleComponent } from './examples/tic-tac-toe/multi-player-example.component';
import { TicTacToeBoardComponent } from './examples/tic-tac-toe/tic-tac-toe-board.component';
import { NgxInitModule } from 'ngx-init';
import { ChessSinglePlayerExampleComponent } from './examples/chess/chess-single-player-example.component';
import { ChessBoardComponent } from './examples/chess/chess-board.component';
import { AuthenticatedExampleComponent } from './examples/tic-tac-toe/authenticated-example.component';
import { SpectatorExampleComponent } from './examples/tic-tac-toe/spectator-example.component';
import { UnsupportedExampleComponent } from './examples/unsupported-example.component';
import { PhasesExampleComponent } from './examples/phases/phases-example.component';

@NgModule({
  declarations: [
    AppComponent,

    NavComponent,

    SinglePlayerExampleComponent,
    MultiPlayerExampleComponent,
    AuthenticatedExampleComponent,
    SpectatorExampleComponent,

    PhasesExampleComponent,

    UnsupportedExampleComponent,

    ChessSinglePlayerExampleComponent,

    TicTacToeBoardComponent,
    ChessBoardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    FlexLayoutModule,

    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,

    LayoutModule,

    MatToolbarModule,

    MatSidenavModule,

    MatListModule,

    TurnBasedCoreModule,
    NgxInitModule,
  ],
  providers: [],
  entryComponents: [
    TicTacToeBoardComponent,
    ChessBoardComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

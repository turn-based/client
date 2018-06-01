import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameTypeCardComponent } from './game-type-card/game-type-card.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './core/reducers';
import { TicTacToeGameComponent } from './room-page/tic-tac-toe.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyPageComponent,
    RoomPageComponent,
    GameTypeCardComponent,
    TicTacToeGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FlexLayoutModule,

    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,

    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

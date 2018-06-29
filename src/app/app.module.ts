import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { RoomPageComponent } from './room-page/room-page.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameTypeCardComponent } from './game-type-card/game-type-card.component';
import { StoreModule } from '@ngrx/store';
import { NgxInitModule } from 'ngx-init';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamesModule } from './games/games.module';

@NgModule({
  declarations: [
    AppComponent,
    LobbyPageComponent,
    RoomPageComponent,
    GameTypeCardComponent,
    // TicTacToeGameComponent,
    NavComponent,
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

    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    NgxInitModule,

    LayoutModule,

    MatToolbarModule,

    MatSidenavModule,

    MatListModule,
    GamesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

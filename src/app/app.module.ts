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

@NgModule({
  declarations: [
    AppComponent,

    NavComponent,

    SinglePlayerExampleComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

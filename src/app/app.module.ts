import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { RoomPageComponent } from './room-page/room-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LobbyPageComponent,
    RoomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { LobbyService } from '../../lobby.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  template: `
    <h2>Game Types</h2>
    <table>
      <tr *ngFor="let gameType of (gameTypes | async)">
        <td>{{gameType}}</td><td><button mat-button (click)="startGame(gameType)">Start</button></td>
      </tr>
    </table>
  `
})
export class LobbyComponent implements OnInit {
  private gameTypes: Promise<string[]>;

  constructor(private lobby: LobbyService, private router: Router) {}

  ngOnInit() {
    this.gameTypes = this.lobby.getGameTypes();
  }

  async startGame(gameType: string) {
    const {gameID} = await this.lobby.createGame(gameType);
    this.router.navigate(['games', gameType, 'rooms', gameID])
  }
}

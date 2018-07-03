import { Component, OnInit } from '@angular/core';
import { LobbyService } from '../../lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  private gameTypes: Promise<string[]>;

  constructor(private lobby: LobbyService) {
    this.gameTypes = this.lobby.getGameTypes();
  }

  ngOnInit() {
  }

  async startGame(gameType: string) {
    const {gameID} = await this.lobby.createGame(gameType);
    console.log(gameID)
  }

}

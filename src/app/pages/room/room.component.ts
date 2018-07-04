import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LobbyService } from '../../lobby.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  private roomId: string;
  private gameType: string;

  constructor(private lobby: LobbyService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (paramMap) => {
      this.gameType = paramMap.get('gameType');
      this.roomId = paramMap.get('roomId');

      console.log(await this.lobby.joinGame(this.gameType, this.roomId, {playerID: 1, playerName: 'Name'}));
    })
  }

}

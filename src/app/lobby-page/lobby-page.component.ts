import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGameType, IRoomForLobby, TbsService } from '../tbs.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby-page',
  templateUrl: './lobby-page.component.html',
  styleUrls: ['./lobby-page.component.scss']
})
export class LobbyPageComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  gameTypes: IGameType[];
  rooms: IRoomForLobby[];

  constructor(private tbs: TbsService, private router: Router) {
  }

  ngOnInit() {
    this.subscription.add(this.tbs.getGameTypes().subscribe((gameTypes) => {
      this.gameTypes = gameTypes;
    }));

    this.subscription.add(this.tbs.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startGame(gameType: IGameType) {
    this.tbs.startGame(gameType.id).subscribe((roomId) => {
      this.router.navigateByUrl(`/rooms/${roomId}`);
    });

  }
}

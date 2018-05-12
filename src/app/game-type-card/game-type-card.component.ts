import { Component, Input, OnInit } from '@angular/core';
import { IGameType, TbsService } from '../tbs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-type-card',
  templateUrl: './game-type-card.component.html',
  styleUrls: ['./game-type-card.component.scss']
})
export class GameTypeCardComponent implements OnInit {
  @Input() gameType: IGameType;

  constructor(private tbs: TbsService, private router: Router) {}

  ngOnInit() {
  }

  play(gameType: IGameType) {
    this.tbs.startGame(gameType.id).subscribe((roomId) => {
      this.router.navigateByUrl(`/rooms/${roomId}`);
    });

  }
}

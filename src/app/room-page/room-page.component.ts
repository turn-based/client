import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRoom, TbsService } from '../tbs.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {
  room: IRoom;

  constructor(private route: ActivatedRoute, private tbs: TbsService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((paramMap) => this.tbs.getRoom(paramMap.get('roomId')))
    ).subscribe((room) => {
      this.room = room;
    });
  }

}

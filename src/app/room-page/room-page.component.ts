import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {
  roomId: string;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((paramMap) => {
      this.roomId = paramMap.get('roomId');
    });
  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { TbsService } from './tbs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [
    TbsService
  ]
})
export class AppComponent {
  title = 'tbs-client';
}

import { Component, Input } from '@angular/core';
import { SecretState } from 'boardgame.io-pure-games';

@Component({
  template: `
    <div class="secret-state">
      <section>
        <pre>{{G | json}}</pre>
      </section>
    </div>
  `,
  styles: [`
    .secret-state section {
      text-align: left;
      padding: 10px;
      margin-bottom: 20px;
      background: #eee;
    }
  `]
})
export class SecretStateBoardComponent {
  @Input() G: any;
}

@Component({
  template: `
    <div fxLayout fxLayoutGap="32px">
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
        <strong>playerID 0</strong>
        <app-client [game]="SecretState"
                    [numPlayers]="3"
                    [board]="SecretStateBoardComponent"
                    [debug]="false"
                    [multiplayer]="true"
                    gameID="secret-state"
                    playerID="0">
        </app-client>
      </div>
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
        <strong>playerID 1</strong>
        <app-client [game]="SecretState"
                    [numPlayers]="3"
                    [board]="SecretStateBoardComponent"
                    [debug]="false"
                    [multiplayer]="true"
                    gameID="secret-state"
                    playerID="1">
        </app-client>
      </div>
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
        <strong>playerID 2</strong>
        <app-client [game]="SecretState"
                    [numPlayers]="3"
                    [board]="SecretStateBoardComponent"
                    [debug]="false"
                    [multiplayer]="true"
                    gameID="secret-state"
                    playerID="2">
        </app-client>
      </div>
      <div fxLayout="column" fxLayoutAlign="start center" fxLayoutGap="32px">
        <strong>App</strong>
        <app-client [game]="SecretState"
                    [numPlayers]="3"
                    [board]="SecretStateBoardComponent"
                    [debug]="false"
                    [multiplayer]="true"
                    gameID="secret-state">
        </app-client>
      </div>
    </div>
  `
})
export class SecretStateExampleComponent {
  SecretState = SecretState;
  SecretStateBoardComponent = SecretStateBoardComponent;
}

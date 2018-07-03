import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publishLast } from 'rxjs/operators';
import { ConnectableObservable, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {
  constructor(private http: HttpClient) {}

  getGameTypes(): Promise<string[]> {
    return this.http.get<string[]>('http://localhost:8001/games').toPromise();
  }

  createGame(gameType: string, initParams?: {numPlayers: number} = null): Promise<{gameID: string}> {
    return this.http.post<{gameID: string}>(`http://localhost:8001/games/${gameType}`, initParams).toPromise();
  }
}

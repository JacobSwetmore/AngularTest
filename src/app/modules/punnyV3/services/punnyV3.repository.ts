import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PunnyV3Repository {
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  private dadJokesUrl = 'https://icanhazdadjoke.com';

  private headers = {headers: new HttpHeaders({Accept: 'application/json'})}

  getDadJoke(): Observable<any> {
    return this.httpClient.get(this.dadJokesUrl, this.headers);
  }

}

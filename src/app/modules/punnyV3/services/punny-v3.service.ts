import { Injectable } from '@angular/core';
import {PunnyV3Repository} from './punnyV3.repository';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PunnyV3Service {
  private punnyV3Repository: PunnyV3Repository;

  constructor(punnyV3Repository: PunnyV3Repository) {
    this.punnyV3Repository = punnyV3Repository;
  }

  public getDadJoke(): Observable<any> {
    return this.punnyV3Repository.getDadJoke();
  }

}

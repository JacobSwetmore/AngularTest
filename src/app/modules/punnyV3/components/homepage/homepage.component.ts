import { Component, OnInit } from '@angular/core';
import {PunnyV3Repository} from '../../services/punnyV3.repository';
import {PunnyV3Service} from '../../services/punny-v3.service';
import {interval} from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public currentJoke: any;
  private punnyV3Service: PunnyV3Service;

  constructor(punnyV3Service: PunnyV3Service) {
    this.punnyV3Service = punnyV3Service;
  }

  ngOnInit() {
   this.getNewJoke();
  }

  public getNewJoke(): void {
    this.punnyV3Service.getDadJoke()
      .subscribe((response) => this.currentJoke = response);
  }

}

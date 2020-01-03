import { Component, OnInit } from '@angular/core';
import {PunnyV3Repository} from '../../services/punnyV3.repository';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  private punnyV3Repository: PunnyV3Repository;

  constructor(punnyV3Repository: PunnyV3Repository) {
    this.punnyV3Repository = punnyV3Repository;
  }

  ngOnInit() {
    this.punnyV3Repository.getDadJoke().subscribe();
  }

}

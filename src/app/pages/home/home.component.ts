import { Component, OnInit } from '@angular/core';
import { blockTransition } from '../../shared/animations/route.animation';
import { fadeToggle } from '../../shared/animations/app.animation';
import { ServiceData } from '../../shared/data';
import { ServiceModel } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [blockTransition, fadeToggle],
  host: {
    '[@blockTransition]': ''
  }
})

export class HomeComponent implements OnInit {

  public data: ServiceModel;
  public state: string;

  constructor() {
    this.data = ServiceData[0];
    this.state = 'off';
  }

  ngOnInit() {
    setTimeout(() => {
      this.state = 'on';
    }, 1200);
  }

  public onSelect(key: string): void {
    this.state = 'off';
    setTimeout(() => {
      this.data = ServiceData.find(s => s.key === key);
      this.state = 'on';
    }, 500);

  }

}

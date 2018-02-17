import { Component, OnInit } from '@angular/core';
import { blockTransition } from '../../shared/animations/route.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [blockTransition],
  host: {
    '[@blockTransition]': ''
  }
})

export class HomeComponent implements OnInit {



  constructor() {

  }

  ngOnInit() {
  }

}

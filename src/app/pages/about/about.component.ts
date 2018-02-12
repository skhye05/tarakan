import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  imagelist = [
    'image.svg',
    'image.svg',
    'image.svg',
    'image.svg'
  ];

  leftNavDisabled = false;
  rightNavDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  clickItem(item, index) {
    this.ds.moveTo(index);
    console.log('itmen clicked');
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

}

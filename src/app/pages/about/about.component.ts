import { Component, OnInit, ViewChild } from '@angular/core';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { blockTransition } from '../../shared/animations/route.animation'
import { fadeToggleTeam, imgTeam } from '../../shared/animations/app.animation';
import { TeamDatas } from '../../shared/data';
import { TeamModel } from '../../shared/models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [blockTransition, fadeToggleTeam, imgTeam],
  host: {
    '[@blockTransition]': ''
  }
})
export class AboutComponent implements OnInit {

  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;
  public state: string;
  public team: TeamModel[];
  public memberInfo: TeamModel;

  leftNavDisabled = false;
  rightNavDisabled = false;

  constructor() {
    this.team = TeamDatas;
    this.state = 'on';
  }

  ngOnInit() {
    this.team[0].state = 'on';
    this.memberInfo = this.team[0];
  }

  clickItem(member: TeamModel, index) {
    this.ds.moveTo(index);
    this.team.forEach((member, i) => {
      if (i === index) {
        this.team[i].state = 'on';
      } else {
        if (this.team[i].state === 'on')
          this.team[i].state = 'off';
      }
    });

    this.state = 'off';
    setTimeout(() => {
      this.memberInfo = member;
      this.state = 'on';
    }, 500);
  }

  onHover(index: number) {
    // this.team.forEach((member, i) => {
    //   if (i === index) {
    //     this.team[i].state = 'on';
    //   } else {
    //     if (this.team[i].state === 'on')
    //       this.team[i].state = 'off';
    //   }
    // })
  }

  onSelect() {

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

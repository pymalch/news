import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides, Card } from 'ionic-angular';
import { Panel } from './panel';


@Component({
  selector: 'panel',
  templateUrl: 'panel.html'
})
export class PanelComponent {
  @ViewChild(Slides) slides: Slides;

  item: any;
  panels: Array<{title: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.panels = [];
   for (let i=0; i<5; i++){
     this.panels.push({
       title : 'title '+i
     })
   }
  }

}



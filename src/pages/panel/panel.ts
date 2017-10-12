import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'panel',
  templateUrl: 'panel.html'
})
export class Panels {

  panels: Array<{title: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.panels = [];
   for (let i=0; i<5; i++){
     this.panels.push({
       title : 'oj'
     })
   }
  }

}



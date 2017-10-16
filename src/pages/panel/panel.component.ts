import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { PanelService } from './panel.service';
import { Panel } from './panel';


@Component({
  selector: 'panel',
  templateUrl: 'panel.html'
})
export class PanelComponent implements OnInit {
  @ViewChild(Slides) slides: Slides;

  item: any;
  panels: Panel[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private panelService: PanelService) {

   /*for (let i=0; i<5; i++){
     this.panels.push({
       title : 'title '+i
     })
   }*/
  }
  getPanels(): void {
    this.panelService
        .getPanels()
        .then(panels => this.panels = panels);
    console.log(this.panels)
  }

  ngOnInit(): void {
    this.getPanels();
  }

}



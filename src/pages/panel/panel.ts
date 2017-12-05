import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Card } from './../../app/card/card';
import { InitializeService } from './../../app/initialize/initialize.service';

import { PanelService } from './panel.service';
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html'
})

export class PanelPage implements OnInit{

  @ViewChild(Slides) slides: Slides;
  cards: Card[];

  constructor(public navCtrl: NavController,private panelService: PanelService, private iS: InitializeService) {
  }

  getPanels(): void {
    this.panelService
        .getPanels()
        .then(cards => this.cards = cards);
  }

  ngOnInit(): void{

      this.iS.callInits().then(inits=>{
          this.getPanels();
      });

  }

}

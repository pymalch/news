import { Component, Input } from '@angular/core';

import { Card } from './card'

@Component({
  selector: 'card',
  templateUrl: 'card.html'
})

export class CardComponent  {
  @Input() card: Card;
  constructor() {
  this.setTitle();
   /*for (let i=0; i<5; i++){
     this.panels.push({
       title : 'title '+i
     })
   }*/
  }

  setTitle(): string {
    return 'salam';
  }

}



import { Component, Input } from '@angular/core';

import { Card } from './card';
 @Component({
  selector: 'card',
  templateUrl: 'card.html'
})

export class CardComponent  {
  @Input() card: Card;
  newsTypes  = {
    1:'آخرین ',
    2:'مهمترین ',
    3:'پربازدیدترین '
    };
    title: string;
  constructor() {

   /*for (let i=0; i<5; i++){
     this.panels.push({
       title : 'title '+i
     })
   }*/
  }

  setTitle(): string {

      if(this.card.keywords){
          this.title = this.card.keywords;
          //self.panels[panel.index].subtitle = Public.t(self.newsTypes[panel.type]);

      }
      else if(this.card.category!= undefined && this.card.category > 0){
          //todo set in core
          this.title = '--';
          //title = Public.getCategoryTitle(cart.category);
          //self.panels[panel.index].subtitle = Public.t(self.newsTypes[panel.type]);
      }
      else {
          //todo set in core
          this.title = this.newsTypes[this.card.type]['title'];
          //self.panels[panel.index].subtitle = null;
      }
    return this.title;
  }

}



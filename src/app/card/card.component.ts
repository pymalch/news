import { Component, Input } from '@angular/core';
import { InitializeService } from './../initialize/initialize.service';
import { Inits } from './../initialize/inits';
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
    inits: Inits;

  constructor(private iS: InitializeService) {

  }

  getTitle(): string {
      if(this.card==undefined)
        return;

      if(this.card.keywords){
          this.title = this.card.keywords;
          //self.panels[panel.index].subtitle = Public.t(self.newsTypes[panel.type]);
      }
      else if(this.card.category!= undefined && this.card.category > 0){
          //todo set in core
          this.title = this.iS.getInits().services[this.card.category].title;
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



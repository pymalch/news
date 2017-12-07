import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NewsListService } from './news-list.service';
import { News } from './news';
import { Card } from './../card/card';
import { InitializeService } from './../initialize/initialize.service';
import { PublicFunctions } from './../public-functions/public-functions';

import { NavController  } from 'ionic-angular';
import { NewsDetailsComponent } from "./../news-details/news-details.component";

@Component({
    selector: 'news-list',
    templateUrl: 'news-list.html'
})

export class NewsListComponent implements OnChanges  {
    @Input() card: Card;

    news: News[];
    constructor(private newsListService: NewsListService, private iS: InitializeService, private pF: PublicFunctions, public nav: NavController) {
    }
    ngOnChanges(changes){
        if(changes["card"] && this.card){

            this.newsListService
                .getNewsList(this.card)
                .then(inits => {
                    this.news = inits;
                });
        }
    }

    openDetails(id) {
        this.nav.push( NewsDetailsComponent , { id: id });
    }

}



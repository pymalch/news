import { Component, Input } from '@angular/core';
import { NavParams  } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { NewsDetailsService } from './news-details.service';
import { NewsDetails } from './news-details';
import { InitializeService } from './../initialize/initialize.service';
import { PublicFunctions } from './../public-functions/public-functions';

@Component({
    selector: 'news-details',
    templateUrl: 'news-details.html'
})

export class NewsDetailsComponent  {

    item: NewsDetails[];
    newsDetails: NewsDetails;
    constructor(private nD: NewsDetailsService, private iS: InitializeService, private pF: PublicFunctions, public navParams: NavParams) {

        if(this.navParams.data.id!=undefined){

            this.nD
                .getNewsDetails(this.navParams.data.id)
                .then(inits => {
                    this.newsDetails = inits;
                });
        }    }

}



import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { News } from './news';
import { Card } from './../card/card';
import { CacheService } from "ionic-cache";

@Injectable()
export class NewsListService {

    cacheKey: string ;

    private url = 'api/news-list';  // URL to web api

    constructor(private http: Http, private cache: CacheService ) {
        cache.setDefaultTTL(15);

    }

    getApiNews(): Promise<News[]>{
        let result: any = this.http.get(this.url)
            .toPromise()
            .then(response =>
            {
                return response.json()[0].result as News[];
            }  )
            .catch(this.handleError);

        return result;

    }

    getNewsList(card: Card): Promise<News[]>{

        this.cacheKey = "news-list-"+ card.id;

        let result= this.cache.getItem(this.cacheKey).catch(() => {
            // fall here if item is expired or doesn't exist
            return this.getApiNews().then(result => {

                let res = this.cache.saveItem(this.cacheKey, result).then(res => {
                    return JSON.parse(res.value);
                });
                return res;
            });
            });


        return result;


    }




    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NewsDetails } from './news-details';
import { CacheService } from "ionic-cache";

@Injectable()
export class NewsDetailsService {

    cacheKey: string ;

    private url = 'api/news-details';  // URL to web api

    constructor(private http: Http, private cache: CacheService ) {
        cache.setDefaultTTL(15);

    }

    getApiNews(): Promise<NewsDetails>{
        let result: any = this.http.get(this.url)
            .toPromise()
            .then(response =>
            {
                return response.json().result as NewsDetails;
            }  )
            .catch(this.handleError);

        return result;

    }

    getNewsDetails(id: number): Promise<NewsDetails>{

        this.cacheKey = "news-details-"+ id;

        let result= this.cache.getItem(this.cacheKey).catch(() => {
            // fall here if item is expired or doesn't exist
            return this.getApiNews().then(result => {

                let res = this.cache.saveItem(this.cacheKey, result).then(res => {
                    console.log(res.value)

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


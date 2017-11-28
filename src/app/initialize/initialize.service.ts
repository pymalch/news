import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Inits } from './inits';
import { CacheService } from "ionic-cache";

@Injectable()
export class InitializeService {

    cacheKey: string = 'init'

    private initUrl = 'api/init';  // URL to web api

    constructor(private http: Http, private cache: CacheService ) {
        cache.setDefaultTTL(30);

    }

    getApiInit(): Promise<Inits>{
        let result: any = this.http.get(this.initUrl)
            .toPromise()
            .then(response => response.json() as Inits )
            .catch(this.handleError);

        return result;

    }

    getInits(): Promise<Inits>{

        let result= this.cache.getItem(this.cacheKey).catch(() => {
            // fall here if item is expired or doesn't exist
            return this.getApiInit().then(result => {

                return this.cache.saveItem(this.cacheKey, result );
            });
        });

        return result;


    }



    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


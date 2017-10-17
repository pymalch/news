import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PanelService {
/*
    //private headers = new Headers({'Content-Type': 'application/json'});
    private heroesUrl = 'api/panels';  // URL to web api

    constructor(private http: Http) { }

    getPanels(): Promise<Panel[]> {

        let result: any = this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Panel[])
            .catch(this.handleError);

        return result;

    }
*/
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


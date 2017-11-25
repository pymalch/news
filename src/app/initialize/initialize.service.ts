import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InitializeService {

    private initUrl = 'api/init';  // URL to web api

    constructor(private http: Http) { }

    getInits(): Promise<{}> {

        let result: any = this.http.get(this.initUrl)
            .toPromise()
            .then(response => response.json() )
    .catch(this.handleError);

        return result;

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


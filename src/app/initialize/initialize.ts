import { Injectable }    from '@angular/core';
import { InitializeService } from './initialize.service';

@Injectable()
export class Initialize  {

    services: {};
    agencies: {};

    constructor(private initializeService: InitializeService) {
        this.initializeApp();
    }

    initializeApp(): void {
        this.initializeService
            .getInits()
            .then(inits => {  console.log(inits) });

    }

}



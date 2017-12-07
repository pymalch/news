import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule }    from '@angular/http';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DetailPage} from "../pages/detail/detail";
import {PanelPage} from "../pages/panel/panel";

import {PanelService} from "../pages/panel/panel.service";
import { InitializeService} from "../app/initialize/initialize.service";
import { NewsListService} from "../app/news-list/news-list.service";
import { NewsDetailsService} from "../app/news-details/news-details.service";

import { PublicFunctions} from "../app/public-functions/public-functions";


import { CardComponent } from "./card/card.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";


import { CacheModule } from "ionic-cache";

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    DetailPage,
    PanelPage,
    CardComponent,
      NewsListComponent,
      NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      CacheModule.forRoot(),

      HttpModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    ListPage,
    DetailPage,
    PanelPage,
    CardComponent,
      NewsDetailsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PanelService,
      InitializeService,
      NewsListService,
      NewsDetailsService,
      PublicFunctions,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

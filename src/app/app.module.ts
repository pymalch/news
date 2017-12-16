import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule }    from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DetailPage } from "../pages/detail/detail";
import { PanelPage } from "../pages/panel/panel";
import { LoginPage } from "../pages/login/login";

import { PanelService } from "../pages/panel/panel.service";
import { InitializeService } from "../app/initialize/initialize.service";
import { NewsListService } from "../app/news-list/news-list.service";
import { NewsDetailsService } from "../app/news-details/news-details.service";

import { PublicFunctions } from "../app/public-functions/public-functions";


import { CardComponent } from "./card/card.component";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";


import { CacheModule } from "ionic-cache";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    DetailPage,
    PanelPage,
    CardComponent,
      LoginPage,
       NewsListComponent,
      NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CacheModule.forRoot(),
    IonicStorageModule.forRoot(),
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
      LoginPage,
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

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}

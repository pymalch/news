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
import {CardComponent} from "./card/card.component";
import { CacheModule } from "ionic-cache";

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    DetailPage,
    PanelPage,
    CardComponent
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
    CardComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PanelService,
      InitializeService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

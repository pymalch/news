import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { DetailPage } from "../pages/detail/detail";
import { PanelPage } from "../pages/panel/panel";
import { InitializeService } from '../app/initialize/initialize.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PanelPage;

  pages: Array<{title: string, component: any}>;
  inits: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: PanelPage },
      { title: 'List', component: ListPage },
      { title: 'Details of page', component: DetailPage},
     ];
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

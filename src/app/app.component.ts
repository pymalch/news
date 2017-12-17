import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';


import { DetailPage } from "../pages/detail/detail";
import { PanelPage } from "../pages/panel/panel";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any;

  pages: Array<{title: string, component: any}>;
  inits: any;
    storage: Storage;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, storage: Storage) {

      this.storage = storage;
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'پنل اخبار', component: PanelPage },
      { title: 'درباره خبروان', component: DetailPage},
     ];

      /*this.storage.get('token').then((val) => {
          return Observable.create(observer => {
              observer.next(access);
              observer.complete();
          });
      });*/

      this.storage.get('token').then(val=>{
          if(val!=null)
              this.rootPage = PanelPage;
          else
            this.rootPage = LoginPage;
      });

  }

    logout(){
        this.storage.remove('token');
        this.nav.setRoot(LoginPage);
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

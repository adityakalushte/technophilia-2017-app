import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Ballots } from '../pages/ballots/ballots';

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyD30BbTsfissawqmEgN6sqZnJ66fcArt78",
  authDomain: "technophilia-2017-app.firebaseapp.com",
  databaseURL: "https://technophilia-2017-app.firebaseio.com",
  projectId: "technophilia-2017-app",
  storageBucket: "technophilia-2017-app.appspot.com",
  messagingSenderId: "521949716423"
});

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Ballots;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
     { title: 'Ballots', component: Ballots }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

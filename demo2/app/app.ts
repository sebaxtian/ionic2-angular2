import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
<<<<<<< HEAD
=======
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { WidgetRegistry } from "angular2-schema-form";
>>>>>>> 0ef1e83780b7deb31382f3ee7f0eb53351f58ecc


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
<<<<<<< HEAD
export class MyApp {
=======

export class MyApp {

>>>>>>> 0ef1e83780b7deb31382f3ee7f0eb53351f58ecc
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
<<<<<<< HEAD
}

ionicBootstrap(MyApp);
=======

}

ionicBootstrap(MyApp, [disableDeprecatedForms(), provideForms(), WidgetRegistry]);
>>>>>>> 0ef1e83780b7deb31382f3ee7f0eb53351f58ecc

import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { WidgetRegistry } from "angular2-schema-form";


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})

export class MyApp {

  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

}

ionicBootstrap(MyApp, [disableDeprecatedForms(), provideForms(), WidgetRegistry]);

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    /**
     * This console.log function work with running on 'ionic serve'
     * the browser show console.log.
     * 
     * But running on 'ionic run android -lc' or 'ionic run android' --livereload --consolelogs'
     * not work display console logs on android device.
     * 
     * [SOLVED]
     * Change in the package.json file:
     * Replace: "ionic:serve": "ionic-app-scripts serve"
     * With: "ionic:watch": "ionic-app-scripts watch"
     */
    console.log('Constructor Home Page');
  }

  testConsole() {
    /**
     * This console.log function work with running on 'ionic serve'
     * the browser show console.log. Event click button.
     * 
     * But running on 'ionic run android -lc' or 'ionic run android' --livereload --consolelogs'
     * not work display console logs on android device. Event click button.
     * 
     * [SOLVED]
     * Change in the package.json file:
     * Replace: "ionic:serve": "ionic-app-scripts serve"
     * With: "ionic:watch": "ionic-app-scripts watch"
     */
    console.log('Click on button Test Console Log');
  }

}

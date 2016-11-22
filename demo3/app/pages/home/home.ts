import {Component} from '@angular/core';
import {ionicBootstrap} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Validators} from '@angular/common';
import {FormlyForm} from "../../app/ng2-formly/components/";
//import {ValidationService} from "ng2-formly";
import {FormlyProviders} from "ng2-formly";
import {FormlyMessages} from "ng2-formly";
import {FormlyEventEmitter} from "ng2-formly";
import {FormlyConfig} from "ng2-formly";
import {TemplateDirectives} from "ng2-formly";
import {FormlyBootstrap} from "ng2-formly";
import {Field} from "ng2-formly";
import {FormlyPubSub} from "ng2-formly";
import {FormlyFieldConfig} from "ng2-formly";


@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [FormlyForm],
  providers: [FormlyConfig, FormlyMessages]
})

export class HomePage {

  user = {};
  userFields;

  constructor(private fc: FormlyConfig) {

    this.userFields = [{
      className: 'row',
      fieldGroup: [{
          className: 'col-xs-6',
          key: 'email',
          type: 'input',
          templateOptions: {
              type: 'email',
              label: 'Email address',
              placeholder: 'Enter email'
          },
          validation: Validators.compose([Validators.required, Validators.maxLength(10)])
      }, {
          className: 'col-xs-6',
          key: 'password',
          type: 'input',
          templateOptions: {
              type: 'password',
              label: 'Password',
              placeholder: 'Password',
              pattern: ''
          },
          validation: Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(2)])
      }]
    }];

    this.user = {
      email: 'email@gmail.com',
      checked: false
    };

  }
}

//ionicBootstrap(HomePage, [FormlyProviders]);
ionicBootstrap(HomePage, [FormlyBootstrap, FormlyProviders]);

import {Component, Input} from 'angular2/core';
import {NgModel} from 'angular2/common';

import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {User} from '../foo/foo';

@Component({
  selector: 'app',
  template: `
		<h1>My First Angular 2 App</h1>
    <input [(ng-model)]="user.firstName"/>
    <input [(ng-model)]="user.lastName"/>
    <button type="button" (click)="clickHandler()">click me</button>
    <hr/>
		<user [user-data]="user" (letknow)="handler($event)"></user>
	`,
	directives: [RouterOutlet, User, NgModel]
})
@RouteConfig([
])
export class App {
	constructor() {
		console.log('App ctor');
    this.user = {
      firstName: 'fi',
      lastName: 'las'
    };
	}

  public user: {
    firstName:string; lastName: string;
  };

  public handler($event){
    console.log('handler1', $event);
  }

  public clickHandler(){
    alert('I was clicked');
  }
}


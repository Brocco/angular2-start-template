import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgModel} from 'angular2/common';

@Component({
    selector: 'user',
    template: `
    <input [(ng-model)]="userData.firstName"/>
    <input [(ng-model)]="userData.lastName"/>
	`,
  directives: [NgModel]
})
export class User {
	constructor() {
    setInterval(() => {
      var d = new Date();
      this.letknow.next(d.toString());
    }, 1000);
  }

  @Input() public userData: any;
  @Output() letknow = new EventEmitter();
}

import {Component, Input} from 'angular2/core';
import {NgModel} from 'angular2/common';

@Component({
    selector: 'user',
    template: `
    <input [(ng-model)]="userData.firstName"/>
    <div>{{userData.lastName}}</div>
	`,
  directives: [NgModel]
})
export class User {
	constructor() {}

  @Input() public userData: any;
}

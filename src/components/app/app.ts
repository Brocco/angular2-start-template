import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'app',
    template: `
		<h1>My First Angular 2 App</h1>
		<router-outlet></router-outlet>
	`,
	directives: [RouterOutlet]
})
@RouteConfig([
])
export class App {
	constructor() {
		console.log('App ctor');
	}
}


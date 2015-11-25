import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {App} from './components/app/app';

bootstrap(App, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
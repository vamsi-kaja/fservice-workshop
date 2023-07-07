import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('assignment1');
  this.route('assignment2');
  this.route('assignment3');
  this.route('assignment4');
  this.route('assignment5');
});

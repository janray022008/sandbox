import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('showcase', {
    path: '/:showcaseName'
  }, function() {
    this.route('gig', {
      path: '/:gigName'
    }, function() {});

    this.route('newGig', {
      path: '/gig/new'
    });
  });
});

export default Router;

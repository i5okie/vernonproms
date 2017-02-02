import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('earlymusic');
  this.route('galaconcert');
  this.route('vernonproms');
});

export default Router;

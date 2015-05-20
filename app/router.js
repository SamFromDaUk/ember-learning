import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('user', function() {
        this.resource('user_detail', { path: '/:id' });
    });
});

export default Router;

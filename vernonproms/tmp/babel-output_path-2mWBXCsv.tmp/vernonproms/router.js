define('vernonproms/router', ['exports', 'ember', 'vernonproms/config/environment'], function (exports, _ember, _vernonpromsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _vernonpromsConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('earlymusic');
    this.route('galaconcert');
    this.route('vernonproms');
  });

  exports['default'] = Router;
});
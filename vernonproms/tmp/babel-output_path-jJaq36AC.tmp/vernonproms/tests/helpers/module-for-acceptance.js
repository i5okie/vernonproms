define('vernonproms/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'vernonproms/tests/helpers/start-app', 'vernonproms/tests/helpers/destroy-app'], function (exports, _qunit, _vernonpromsTestsHelpersStartApp, _vernonpromsTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _vernonpromsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _vernonpromsTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
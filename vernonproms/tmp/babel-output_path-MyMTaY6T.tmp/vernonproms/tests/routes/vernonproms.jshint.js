define('vernonproms/tests/routes/vernonproms.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/vernonproms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/vernonproms.js should pass jshint.');
  });
});
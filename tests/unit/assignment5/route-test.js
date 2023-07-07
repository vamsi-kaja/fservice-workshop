import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | assignment5', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:assignment5');
    assert.ok(route);
  });
});

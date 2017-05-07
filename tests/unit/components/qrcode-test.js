import { test, moduleForComponent } from 'ember-qunit';
import startApp from '../../helpers/start-app';
import Ember from 'ember';

let App;

moduleForComponent('qrcode', 'QRCode', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('is a div tag', function(assert) {
    assert.equal('div', this.$().prop('tagName'));

    this.subject().teardownQRCode();
});

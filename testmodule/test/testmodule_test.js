'use strict';

var testmodule = require('../lib/testmodule.js');
var assert = require('chai').assert;

describe('testmodule', function () {

  it('should be awesome', function () {
    assert.equal(testmodule.awesome(), 'awesome');
  });

});

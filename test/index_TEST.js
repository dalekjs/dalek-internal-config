'use strict';

var expect = require('chai').expect;
var Assertions = require('../index.js');

describe('dalek-internal-config', function() {

  it('should exist', function() {
    var config = new Config();
    expect(config).to.be.ok;
  });

});

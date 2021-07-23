/**
 * Lethean VPM
 * Distributed Virtual Private Marketplace
 *
 * The version of the OpenAPI document: 1
 * Contact: contact@lethean.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LetheanVpm);
  }
}(this, function(expect, LetheanVpm) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LetheanVpm.TimeRangeEntity();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TimeRangeEntity', function() {
    it('should create an instance of TimeRangeEntity', function() {
      // uncomment below and update the code to test TimeRangeEntity
      //var instane = new LetheanVpm.TimeRangeEntity();
      //expect(instance).to.be.a(LetheanVpm.TimeRangeEntity);
    });

    it('should have the property from (base name: "from")', function() {
      // uncomment below and update the code to test the property from
      //var instance = new LetheanVpm.TimeRangeEntity();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instance = new LetheanVpm.TimeRangeEntity();
      //expect(instance).to.be();
    });

  });

}));

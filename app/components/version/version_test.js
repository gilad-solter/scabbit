'use strict';

describe('scabbit.version module', function() {
  beforeEach(module('scabbit.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});

'use strict';

angular.module('scabbit.version', [
  'scabbit.version.interpolate-filter',
  'scabbit.version.version-directive'
])

.value('version', '0.1');

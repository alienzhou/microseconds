/* global performance */
'use strict';

var now;

if (global.process && process.hrtime) {
  var hrtime = process.hrtime;

  now = function () {
    var hr = hrtime();
    return (hr[0] * 1e9 + hr[1]) / 1e3;
  };

} else if (global.performance && performance.now) {

  var start = (performance.timing && performance.timing.navigationStart) || Date.now();

  now = function() {
    return (start + performance.now()) * 1e3;
  };

} else {

  now = function() {
    return Date.now() * 1e3;
  };

}

module.exports = now;

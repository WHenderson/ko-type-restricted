var ko = require('knockout');
var isAn = require('is-an');
var util = require('util');
require('../index')(ko);

var base = ko.observable().extend({ type: 'Undefined|String' });
var convert = base.extend({ convert: 'Undefined' });

convert();

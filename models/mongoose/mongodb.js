var configSelf = require('../../config');
var mongoose = require('mongoose');
mongoose.connect('mongodb://' + configSelf.host + ':' + configSelf.port + '/' + configSelf.db)
exports.mongoose = mongoose;
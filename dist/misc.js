'use strict';

var api = require('./api');

var platformType = function platformType(platform) {
    return api.newPlatformType(platform);
};
var getSettings = function getSettings() {
    return api.get('settings');
};

module.exports = {
    platformType: platformType,
    getSettings: getSettings
};
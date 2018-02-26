'use strict';

var api = require('./api');

var platformType = function platformType(platform) {
    return api.newPlatformType(platform);
};
var getSeasonLeaderboard = function getSeasonLeaderboard() {
    return api.get('seasonRankLeaderboard');
};
var getOverallLeaderboard = function getOverallLeaderboard() {
    return api.get('clubRankLeaderboard');
};

module.exports = {
    platformType: platformType,
    getOverallLeaderboard: getOverallLeaderboard,
    getSeasonLeaderboard: getSeasonLeaderboard
};
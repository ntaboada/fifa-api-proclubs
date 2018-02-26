'use strict';

var api = require('./api');

var platformType = function platformType(platform) {
    return api.newPlatformType(platform);
};
var getMembersClubStats = function getMembersClubStats(clubId, blazeId) {
    return api.get('clubs/' + clubId + '/members/' + blazeId + '/stats?filters=pretty');
};
var getMembersStats = function getMembersStats(blazeId) {
    return api.get('members/' + blazeId + '/stats?filters=pretty');
};

module.exports = {
    platformType: platformType,
    getMembersClubStats: getMembersClubStats,
    getMembersStats: getMembersStats
};
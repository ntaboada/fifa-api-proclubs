const api = require('./api');

const platformType = platform => api.newPlatformType(platform);
const getMembersClubStats = (clubId, blazeId) => api.get(`clubs/${clubId}/members/${blazeId}/stats?filters=pretty`);
const getMembersStats = blazeId => api.get(`members/${blazeId}/stats?filters=pretty`);

module.exports = {
    platformType,
    getMembersClubStats,
    getMembersStats
};

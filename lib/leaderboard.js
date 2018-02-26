const api = require('./api');

const platformType = platform => api.newPlatformType(platform);
const getSeasonLeaderboard = () => api.get(`seasonRankLeaderboard`);
const getOverallLeaderboard = () => api.get(`clubRankLeaderboard`);

module.exports = {
    platformType,
    getOverallLeaderboard,
    getSeasonLeaderboard
};
const api = require('./api');

const platformType = platform => api.newPlatformType(platform);
const getSeasonLeaderboard = () => api.get(`seasonRankLeaderboard`);
const getOverallLeaderboard = () => api.get(`clubRankLeaderboard`);
const getfifa19SeasonLeaderboard = () => api.getfifa19(`seasonRankLeaderboard`);
const getfifa19OverallLeaderboard = () => api.getfifa19(`clubRankLeaderboard`);


module.exports = {
    platformType,
    getOverallLeaderboard,
    getSeasonLeaderboard,
    getfifa19OverallLeaderboard,
    getfifa19SeasonLeaderboard
};

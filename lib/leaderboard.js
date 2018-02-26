import * as api  from './api';

export const platformType = platform => api.newPlatformType(platform);
export const getSeasonLeaderboard = () => api.get(`seasonRankLeaderboard`);
export const getOverallLeaderboard = () => api.get(`clubRankLeaderboard`);

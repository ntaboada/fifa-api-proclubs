import * as api from './api';

export const platformType = platform => api.newPlatformType(platform);
export const getMembersClubStats = (clubId, blazeId) => api.get(`clubs/${clubId}/members/${blazeId}/stats?filters=pretty`);
export const getMembersStats = blazeId => api.get(`members/${blazeId}/stats?filters=pretty`);

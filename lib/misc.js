import * as api from './api';

export const platformType = platform => api.newPlatformType(platform);
export const getSettings = () => api.get('settings');

const api = require('./api');

const platformType = platform => api.newPlatformType(platform);
const getSettings = () => api.get('settings');

module.exports = {
    platformType,
    getSettings
};
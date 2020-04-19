const api = require('./api');

const platformType = platform => api.newPlatformType(platform);
const getSettings = () => api.getNoParam('settings');

module.exports = {
    platformType,
    getSettings
};

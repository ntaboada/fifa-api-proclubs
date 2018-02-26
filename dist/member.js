'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMembersStats = exports.getMembersClubStats = undefined;

var _api = require('./api');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const getMembersClubStats = exports.getMembersClubStats = (clubId, blazeId) => api.get(`clubs/${clubId}/members/${blazeId}/stats?filters=pretty`);
const getMembersStats = exports.getMembersStats = blazeId => api.get(`members/${blazeId}/stats?filters=pretty`);
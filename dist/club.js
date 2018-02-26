'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClubInfo = exports.getClubMatchHistory = exports.getClubStats = exports.getClubSeasonStats = exports.getClubSeasonRank = exports.getClubMemberStats = exports.getClubMembers = exports.getClubIdByName = undefined;

var _api = require('./api');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function* values(obj) {
  for (let prop of Object.keys(obj)) {
    yield obj[prop];
  }
};

const getClubIdByName = async query => {
  const res = await api.get(`clubsComplete/${query}`);
  return res.clubId;
};

const getClubMembers = async clubId => {
  const res = await api.get(`clubs/${clubId}/members`);
  return Array.from(values(res));
};

const getClubMemberStats = clubId => api.get(`clubs/${clubId}/membersComplete`);

const getClubSeasonRank = clubId => api.get(`clubs/${clubId}/seasonRank`);

const getClubSeasonStats = clubId => api.get(`clubs/${clubId}/seasonalStats`);

const getClubStats = clubId => api.get(`clubs/${clubId}/stats`);

const getClubMatchHistory = clubId => api.get(`clubs/${clubId}/matches`);;

const getClubInfo = clubId => api.get(`clubs/${clubId}/info`);;

exports.getClubIdByName = getClubIdByName;
exports.getClubMembers = getClubMembers;
exports.getClubMemberStats = getClubMemberStats;
exports.getClubSeasonRank = getClubSeasonRank;
exports.getClubSeasonStats = getClubSeasonStats;
exports.getClubStats = getClubStats;
exports.getClubMatchHistory = getClubMatchHistory;
exports.getClubInfo = getClubInfo;
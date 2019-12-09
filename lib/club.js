const api = require('./api');

function * values (obj) {
  for (let prop of Object.keys(obj)) { yield obj[prop] }
}

const platformType = platform => api.newPlatformType(platform);

const getfifa19ClubIdByName = async query => {
  const res = await api.getfifa19(`clubsComplete/${query}`);
  return res.clubId
};

const getfifa19ClubMembers = async clubId => {
  const res = await api.getfifa19(`clubs/${clubId}/members`);
  return Array.from(values(res))
};

const getfifa19ClubMemberStats = clubId => api.getfifa19(`clubs/${clubId}/membersComplete`);

const getfifa19ClubSeasonRank = clubId => api.getfifa19(`clubs/${clubId}/seasonRank`);

const getfifa19ClubSeasonStats = clubId => api.getfifa19(`clubs/${clubId}/seasonalStats`);

const getfifa19ClubStats = clubId => api.getfifa19(`clubs/${clubId}/stats`);

const getfifa19ClubMatchHistory = clubId => api.getfifa19(`clubs/${clubId}/matches`);

const getfifa19ClubInfo = clubId => api.getfifa19(`clubs/${clubId}/info`);

const getClubIdByName = async query => {
  const res = await api.getParam(`clubs/search`,`&clubName=${query}&maxResultCount=20&offset=0`);
  return res.clubId
};

const getClubMembers = async clubId => {
  const res = await api.getParam(`members/stats`,`&clubIds=${clubId}`);
  return Array.from(values(res))
};

const getClubMemberStats = clubId => api.getParam(`members/career/stats`,`&clubIds=${clubId}`);

const getClubSeasonRank = clubId => api.getParam(`clubs/seasonRank`,`&clubIds=${clubId}`);

const getClubSeasonStats = clubId => api.getParam(`clubs/seasonalStats`,`&clubIds=${clubId}`);

const getClubStats = clubId => api.getParam(`clubs/stats`,`&clubIds=${clubId}&matchType=gameType9&maxResultCount=5`);

const getClubMatchHistory = clubId => api.getParam(`clubs/matches`,`&clubIds=${clubId}&`);

const getClubInfo = clubId => api.getParam(`clubs/info`,`&clubIds=${clubId}`);

module.exports = {
  platformType,
  getClubIdByName,
  getClubMembers,
  getClubMemberStats,
  getClubSeasonRank,
  getClubSeasonStats,
  getClubStats,
  getClubMatchHistory,
  getClubInfo,
  getfifa19ClubIdByName,
  getfifa19ClubMembers,
  getfifa19ClubMemberStats,
  getfifa19ClubSeasonRank,
  getfifa19ClubSeasonStats,
  getfifa19ClubStats,
  getfifa19ClubMatchHistory,
  getfifa19ClubInfo,
};

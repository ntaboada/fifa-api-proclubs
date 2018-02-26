'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(values);

var api = require('./api');

function values(obj) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prop;

  return regeneratorRuntime.wrap(function values$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context.prev = 3;
          _iterator = Object.keys(obj)[Symbol.iterator]();

        case 5:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context.next = 12;
            break;
          }

          prop = _step.value;
          _context.next = 9;
          return obj[prop];

        case 9:
          _iteratorNormalCompletion = true;
          _context.next = 5;
          break;

        case 12:
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context['catch'](3);
          _didIteratorError = true;
          _iteratorError = _context.t0;

        case 18:
          _context.prev = 18;
          _context.prev = 19;

          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }

        case 21:
          _context.prev = 21;

          if (!_didIteratorError) {
            _context.next = 24;
            break;
          }

          throw _iteratorError;

        case 24:
          return _context.finish(21);

        case 25:
          return _context.finish(18);

        case 26:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[3, 14, 18, 26], [19,, 21, 25]]);
}

var platformType = function platformType(platform) {
  return api.newPlatformType(platform);
};

var getClubIdByName = async function getClubIdByName(query) {
  var res = await api.get('clubsComplete/' + query);
  return res.clubId;
};

var getClubMembers = async function getClubMembers(clubId) {
  var res = await api.get('clubs/' + clubId + '/members');
  return Array.from(values(res));
};

var getClubMemberStats = function getClubMemberStats(clubId) {
  return api.get('clubs/' + clubId + '/membersComplete');
};

var getClubSeasonRank = function getClubSeasonRank(clubId) {
  return api.get('clubs/' + clubId + '/seasonRank');
};

var getClubSeasonStats = function getClubSeasonStats(clubId) {
  return api.get('clubs/' + clubId + '/seasonalStats');
};

var getClubStats = function getClubStats(clubId) {
  return api.get('clubs/' + clubId + '/stats');
};

var getClubMatchHistory = function getClubMatchHistory(clubId) {
  return api.get('clubs/' + clubId + '/matches');
};

var getClubInfo = function getClubInfo(clubId) {
  return api.get('clubs/' + clubId + '/info');
};

module.exports = {
  platformType: platformType,
  getClubIdByName: getClubIdByName,
  getClubMembers: getClubMembers,
  getClubMemberStats: getClubMemberStats,
  getClubSeasonRank: getClubSeasonRank,
  getClubSeasonStats: getClubSeasonStats,
  getClubStats: getClubStats,
  getClubMatchHistory: getClubMatchHistory,
  getClubInfo: getClubInfo
};
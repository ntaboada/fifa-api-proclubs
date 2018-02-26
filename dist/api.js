'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(values);

var axios = require('axios');

var API_URL = 'https://www.easports.com/iframe/fifa17proclubs/api/platforms';

var platformType = null;

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

var newPlatformType = function newPlatformType(platform) {
  return platformType = platform;
};

var get = async function get(endpoint) {
  try {
    var response = await axios.get(API_URL + '/' + platformType + '/' + endpoint);
    return Array.from(values(response.data.raw))[0];
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  newPlatformType: newPlatformType,
  get: get
};
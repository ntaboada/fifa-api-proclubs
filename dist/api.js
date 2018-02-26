'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = undefined;

var _axios = require('axios');

var axios = _interopRequireWildcard(_axios);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const API_URL = 'https://www.easports.com/iframe/fifa17proclubs/api/platforms';
const API_PLATFORM = 'PS4';

function* values(obj) {
  for (let prop of Object.keys(obj)) yield obj[prop];
}

const get = exports.get = async endpoint => {
  try {
    const response = await axios.get(`${API_URL}/${API_PLATFORM}/${endpoint}`);
    return Array.from(values(response.data.raw))[0];
  } catch (e) {
    console.log(e);
  }
};
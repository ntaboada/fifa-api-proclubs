const axios = require('axios');

const API_URL = 'https://proclubs.ea.com/api/fifa';

let platformType =  null;

function * values (obj) {
  for (let prop of Object.keys(obj)) yield obj[prop];
}

const newPlatformType = platform => platformType = platform;

const get = async (endpoint) => {
  try {
  	let config = {
		headers: {
			'Referer':'https://proclubs.ea.com/api-docs/index.html?url=/swagger.json',
			}
		}
    const response = await axios.get(`${API_URL}`+ `${endpoint}` + '?platform=' + `${platformType}` ,config);
    return Array.from(values(response.data.raw))[0];
  } catch (e) {
    console.log(e);
  }
};

const getParam = async (endpoint, param) => {
  try {
  	let config = {
		headers: {
			'Referer':'https://proclubs.ea.com/api-docs/index.html?url=/swagger.json',
			}
		}
    const response = await axios.get(`${API_URL}`+ `${endpoint}` + '?platform=' + `${platformType}` + `${param}` ,config);
    return Array.from(values(response.data.raw))[0];
  } catch (e) {
    console.log(e);
  }
};

const getNoParam = async (endpoint) => {
  try {
  	let config = {
		headers: {
			'Referer':'https://proclubs.ea.com/api-docs/index.html?url=/swagger.json',
			}
		}
    const response = await axios.get(`${API_URL}`+ `${endpoint}` ,config);
    return Array.from(values(response.data.raw))[0];
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  newPlatformType,
  get
};

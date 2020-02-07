/* eslint-disable no-console */

var querystring = require('querystring');
var http = require('../httpAxios').default;
const tough = require('tough-cookie');

const log = require('./logger').default;

async function loginWithCredentials(username, password){
  http.defaults.jar = new tough.CookieJar();
  try {
    await login(username, password);

  }
  catch(err){
    log('Login Error : ' + err);
    throw err;
  }
}

async function login(username,password) {
  let redirectPath= '';

  try {
    const csrfRes = await http({
      'method': 'get',
      'url': 'https://idam-web-public.aat.platform.hmcts.net/login?response_type=code&client_id=ccd_gateway&redirect_uri=https%3A%2F%2Fwww-ccd.aat.platform.hmcts.net%2Foauth2redirect'
    });

    let _csrf = '';
    if (csrfRes.headers['set-cookie'][0]) {
      _csrf = csrfRes.headers['set-cookie'][0].replace('XSRF-TOKEN=', '')
        .split(';')[0];

    }

    let ARRAffinityVal = '';
    if (csrfRes.headers['set-cookie'][1]) {
      ARRAffinityVal = csrfRes.headers['set-cookie'][1].replace('ARRAffinity=', '')
        .split(';')[0];

    }

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Sec-Fetch-User': '?1',
      'Sec-Fetch-Site': 'same-site',
      'Sec-Fetch-Mode': 'navigate',
      'ARRAffinity': ARRAffinityVal
    };

    const data = {
      username: username,
      password: password,
      selfRegistrationEnabled: false,
      save: 'Sign in',
      _csrf: _csrf
    };

    const url1 = 'https://idam-web-public.aat.platform.hmcts.net/login?response_type=code&client_id=ccd_gateway&redirect_uri=https%3A%2F%2Fwww-ccd.aat.platform.hmcts.net%2Foauth2redirect';

    let loginres = await http({
      method: 'post',
      url: url1,
      data: querystring.stringify(data),
      config: { headers: headers },
      withCredentials: true
    }).catch(function (error){
      if (error.request) {
        redirectPath= error.request.path;
      }
    });
  }
  catch(err){
    console.log('Login Error for user : '+ username+ 'error code is' +err);
    throw err;
  }

  let code = redirectPath.split('code=')[1].split('&')[0];

  const res = await http({'method':'get',
    'url': 'https://gateway-ccd.aat.platform.hmcts.net/oauth2?code=' + code + '&redirect_uri=www-ccd.aat.platform.hmcts.net/oauth2redirect'

  });
}

module.exports = { loginWithCredentials};


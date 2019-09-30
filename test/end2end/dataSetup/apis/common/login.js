/* eslint-disable no-console */

var querystring = require('querystring');
var http = require('../httpAxios').default;
const tough = require('tough-cookie');

async function loginWithCredentials(username, password){
  http.defaults.jar = new tough.CookieJar();
  try {
    await login(username, password);

  }
  catch(err){
    console.log('Login Error : '+err);
    throw err;
  }
}


async function login(username,password) {
  const csrfRes = await http({
    'method':'get',
    'url' : 'https://idam-web-public.aat.platform.hmcts.net/login?response_type=code&client_id=ccd_gateway&redirect_uri=https%3A%2F%2Fwww-ccd.aat.platform.hmcts.net%2Foauth2redirect'
  });

  let _csrf = '';
  if (csrfRes.headers['set-cookie'][0]){
    _csrf = csrfRes.headers['set-cookie'][0].replace('XSRF-TOKEN=', '').split(';')[0];

  }

  const headers = {
    'Content-Type': 'application/x-www-form-urlencode'
  };

  const data = {
    username: username,
    password: password,
    selfRegistrationEnabled: false,
    save: 'Sign in',
    _csrf: _csrf
  };

    // const url = 'https://idam-web-public.aat.platform.hmcts.net/login?response_type=code&client_id=ccd_gateway&redirect_uri=https%3A%2F%2Fwww-ccd.aat.platform.hmcts.net%2Foauth2redirect'; 
  const url1 = 'https://idam-web-public.aat.platform.hmcts.net/login?response_type=code&client_id=ccd_gateway&redirect_uri=https://www-ccd.aat.platform.hmcts.net/oauth2redirect';
  //   headers['Cookie'] = xsrfCookie; 
  let loginres = await http({
    method: 'post',
    url: url1,
    data: querystring.stringify(data),
    config: { headers: headers },
    withCredentials: true
  });

  let code = loginres.config.url.split('code=')[1].split('&')[0];
  const res = await http({'method':'get',
    'url': 'https://gateway-ccd.aat.platform.hmcts.net/oauth2?code=' + code + '&redirect_uri=www-ccd.aat.platform.hmcts.net/oauth2redirect'
  });


}

module.exports = { loginWithCredentials};


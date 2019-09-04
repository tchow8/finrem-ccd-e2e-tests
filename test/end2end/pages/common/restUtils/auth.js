const axios = require('axios');

async function getAccessToken(username, password){

  let userPasswordString = username+':'+password;
  //   const buff = new Buffer.alloc(userPasswordString);
  //   buff.toString('base64');

  const headers = {
    // Authorization: buff.toString('base64')
    Authorization: Buffer.from(userPasswordString).toString('base64') 
 
  };
      // eslint-disable-next-line no-console
    console.log('***************************** Before ');

  const response = await axios.post('https://idam-api.aat.platform.hmcts.net/oauth2/authorize?response_type=code&client_id=finrem&redirect_uri=https://www-preprod.financial-remedy.reform.hmcts.net/oauth2/callback', headers)
    // .then(res => {
    //   // eslint-disable-next-line no-console
    //   console.log('***************************** '+JSON.stringify(res));

    // }).catch(err => {
    //   // eslint-disable-next-line no-console
    //   console.log(JSON.stringify('***************************** ' +err));

    // });

    // eslint-disable-next-line no-console
    console.log('***************************** After ')
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(response));
}


module.exports = { getAccessToken };



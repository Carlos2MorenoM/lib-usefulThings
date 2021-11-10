const fetch = require('node-fetch')
const qs = require('qs')

exports.postSomething = () => {
 
    let body = {
            grant_type: "refresh_token",
            refresh_token: refreshToken
    } 
      fetch("https://api.requestingTokensExample/oauth2/token", {
        method: "post",
        body: qs.stringify(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Basic " + "MyAuthMethod()"
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json))
        
    };
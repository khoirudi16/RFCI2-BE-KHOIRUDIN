const axios = require("axios");
const fetch = require('node-fetch');
const UserServices = require("./userInfoService");
const config = require("../config");
const { response } = require("express");

function callback(req, res) {
  debugger;
  const body = {
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code: req.query.code,
  };
  debugger;
  const options = { headers: { accept: "application/json" } };
  axios
    .post(`${config.oauthUrl}/access_token`, body, options)
    .then( (response) => {
      debugger;
      response.data["accessToken"]
    })
    .then(async (accessToken) => {
      debugger;
      const user = await UserServices.getUserInfo(config.token);
      res.json({
        data: {
          login: user.login,
          githubId: user.id,
          avatar: user.avatar_url,
          email: user.email,
          name: user.name,
          location: user.location,
        },
      });
    })
    .catch((err) => {
      debugger;
      res.status(500).json({ message: err.message })
    });
}

module.exports = {
  callback: callback,
};
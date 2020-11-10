const axios = require("axios");
const { response } = require("express");
const config = require("../config");


function getUserInfo(token) {
debugger;
const data = axios({
      method: "get",
      url: `${config.apiUrl}/users/mazsam`,
    }).then((response) => {
      debugger
      return response.data;
    }).then(response => {
      debugger
      return response;
    });

    return data;

}

module.exports = {getUserInfo}

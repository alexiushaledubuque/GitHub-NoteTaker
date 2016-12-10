const axios = require('axios')

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

// const promiseObj = getRepos('alexiushaledubuque');
// promiseObj.then(function(data){
//   console.log(data);
// });

let helpers = {
  getGithubInfo: function(username) {
    console.log('INSIDE HELPERS');
    return axios.all([getRepos(username), getUserInfo(username)])
      .then(function(arr){
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      })
  }
}

console.log('LEAVING HELPERS');

module.exports = helpers

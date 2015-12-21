var request = require('superagent');

request
  .get('http://amam-api.heroku.com/groups')
  .withCredentials()
  .end(function(err, res){
    console.log(err, res);
  })

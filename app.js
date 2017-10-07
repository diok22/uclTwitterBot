var TwitterPackage = require('twitter');

var secret = require("./secret")

var Twitter = new TwitterPackage(secret)

var json = require('./tweets.json')
console.log(json[0]);

var jsonFirst = json[0]

Twitter.post('statuses/update', {status: jsonFirst},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

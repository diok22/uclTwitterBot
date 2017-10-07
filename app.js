var TwitterPackage = require('twitter');

var secret = require("./secret")

var Twitter = new TwitterPackage(secret)

var json = require('./tweets.json')
console.log(json.length)
// var jsonFirst = json[0]

var arrayLength = json.length;
for (var i = 0; i < arrayLength; i++) {
  Twitter.post('statuses/update', {status: json[i]},  function(error, tweet, response){
    if(error){
      console.log(error);
    }
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
}

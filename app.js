var TwitterPackage = require('twitter');

var secret = require("./secret")

var Twitter = new TwitterPackage(secret)

// var json = require('./tweets.json')
// console.log(json.length)
// var jsonFirst = json[0]


Twitter.stream('statuses/filter', {track: '@UCLSocBot'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

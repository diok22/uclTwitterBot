var TwitterPackage = require('twitter');
var BookingListener = require('./models/SocietyBookingListener.js');
var secret = require("./secret")

var Twitter = new TwitterPackage(secret)

var json = require('./tweets.json')
console.log(json.length)
var jsonFirst = json[0]
console.log(jsonFirst);


Twitter.stream('statuses/filter', {track: '@UCLSocBot'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
    if (tweet.text.includes("#societybookings")) {

  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

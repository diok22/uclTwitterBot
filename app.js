var TwitterPackage = require('twitter');
var BookingListener = require('./models/SocietyBookingListener.js');
var secret = require("./secret")

var Twitter = new TwitterPackage(secret)

Twitter.stream('statuses/filter', {track: '@UCLSocBot'}, function(stream) {
  stream.on('data', function(tweet) {
    // console.log(tweet.text);
    if (tweet.text.includes("#societybookings")) {
      bookingReply = BookingListener.reply(tweet);
      bookObj = {status: bookingReply}
      Twitter.post('statuses/update', bookObj,  function(error, tweetReply, response){
        console.log(tweetReply)
      });
    };
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

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
    } else {
      Twitter.post('statuses/update', {status: "@" + tweet.user.screen_name + ". Tweet to us with #societybookings and the name of your society to learn its next booking."},  function(error, tweet, response){
        if(error){
          console.log(error);
        }
        console.log(tweet);
      });
    }
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});

var TwitterPackage = require('twitter');

var secret = {
  consumer_key: 'nyEntYwjp4NGk27KahzEa4vE3',
  consumer_secret: 'GabiomPL6SFbJTeprOVn5LYp4x8KhAn8eXaf81I7vRAS8DrhOL',
  access_token_key: '916621288604618757-gD09oNVprueTt8iD2QtJNVRIpDAOiZi',
  access_token_secret: '08UyMBfUbDgy30R49ltsk5eTBnyzx3ExbfppCfIO3d0Ql'
}
var Twitter = new TwitterPackage(secret);


Twitter.post('statuses/update', {status: 'I Love Tech Knights!'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});

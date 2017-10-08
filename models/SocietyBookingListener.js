var exports = module.exports = {};
var json = require('../tweets.json')

var sincejan = 10.0

var societies = ['180 Degrees Consulting Society', 'Abacus Society', 'Advertising, Marketing and PR Society', 'Afghan Society', 'African Caribbean Society', 'Ahlul-Bayt Society', 'AIESEC Society', 'Aikido Club', 'Amateur Boxing Club', 'American Football Club', 'American Society', 'Amnesty International Society', 'Anatomy Society', 'Anime Society', 'Application of Psychedelics', 'Arabic Society', 'Armenian Society', 'Art Society', 'Artificial Intelligence Society', 'Asia Careers Society', 'Atheist, Secularist and Humanist Society', 'Audio Engineering Society', 'Austrian Society', 'Azerbaijan Society', 'Badminton Club', 'Badminton Club (RUMS)', 'Baking Society', 'Baltic Society', 'Bangla Society', 'Barbell Club', 'Baseball Club', "Basketball Club (Men's)", "Basketball Club (Women's)", 'Beekeeping Society', 'Bhangra Society', 'Biopharma Society', 'Blockchain and Crypto-tech Society', 'Boat Club', 'Boat Club (RUMS)', 'Book Club', 'Brazilian Jiu Jitsu Club', 'Bridge Society', 'Bright Futures Society', 'Bruneian Society', 'Buddhist Society', 'Bulgarian Society', 'Business Society', 'Calligraphy Society', 'Canadian Society', 'Capoeira Club', 'Catholic Society', 'Cheerleading Club', 'Cheese Grater Magazine Society', 'Chess Society', 'Chilean Society', 'Chinese Society', 'Chinese Students and Scholars Association', 'Chocolate Society', 'Christian Union', 'Coffee Society', 'Comedy Club', 'Conservative Society', 'Consulting Society', 'Cosmetics Society', 'Cricket Club', 'Cricket Club (RUMS)', 'Cycling Club', 'Cypriot and Hellenic Society', 'Czech and Slovak Society', 'Dance Society', 'Data Science Society', 'Debating Society', 'Diplomacy in Action Society', 'Dodgeball Club', 'Drama Society', 'Duke of Edinburgh Award Society', 'Dutch and Flemish Society', 'Economics & Finance Society', 'Ecuadorian Society', 'Effective Altruism', 'Electronic Music Society', 'Enactus UCL Society', 'Energy Society', 'Engineers Without Borders Society', 'Entrepreneurs Society', 'Eurasian Business Society', 'European Law Students Association', 'European Society', 'Ex-Yugoslav Society', 'Fencing Club', 'Filipino Society', 'Film Society', 'Fintech Society', 'Floorball Club', 'Folk Society', "Football Club (Men's)", "Football Club (RUMS Men's)", "Football Club (RUMS Women's)", "Football Club (Women's)", 'Francophone Society', 'Free Hype Society', 'Friends of Israel Society', 'Friends of Médecins sans Frontières Society', 'Friends of Palestine Society', 'Gaming & E-Sports Society', 'Gastronomy Society', 'Gender & Feminism Society', 'German Society', 'Giving Voice Society', 'Gliding Club', 'GO (weiqi) Club', 'Gospel Society: VOCE', 'Green Economy Society', 'Greenough Society', 'Guild', 'Guitar Society', 'Handball Club', 'Harry Potter Society', 'Hiking & Walking', 'Hindu Society', 'Hip-Hop & RnB Society', "Hockey Club (Men's)", "Hockey Club (RUMS Men's)", "Hockey Club (RUMS Women's)", "Hockey Club (Women's)", 'Horse Riding Club', 'Hungarian Society', 'Ice Club', 'IDEA Society', 'Indian Society', 'Indonesian Society', 'International Relations Society', 'Investment Society', 'Iranian Society', 'Irish Society / An Cumann Gaelach', 'Islamic Society', 'Islamic Society (RUMS)', 'Italian Society', 'Japan Society', 'Jazz Society', 'Jewish Society', 'Jitsu Club', 'Judo Club', 'Juggling & Circus Society', 'Karate Club', 'Kazakh Society', 'Kendo Club', 'Kickboxing Club', 'Kinesis Magazine', 'Knitting Society', 'Korean Society', 'Kurdish Society', 'Labour Society', 'Lacrosse Club', "Lacrosse Club (Men's)", 'Law for All', 'Leadership and Management Society', 'Leading Women Society', 'Lebanese Society', 'Liberal Democrat Society', 'Libertarian Society', 'Life Ethics Society', 'Live Music Society', 'Magic Society', 'Malaysian Society', 'Marxist Society', 'MDs Comedy Revue Society', 'Medical Society', 'Medsin Society', 'Mexican Society', 'Mindful Society', 'Mixed Martial Arts (FRT MMA) Club', 'Mixology Society', 'Model United Nations Society', 'Modo Fashion Society', 'Moroccan Society', 'Mountaineering Club', 'Muay Thai Club', 'Museums Society', 'Music Society', 'Music Society (RUMS)', 'Musical Theatre Society', 'Nepalese Society', 'Netball Club', 'Netball Club (RUMS)', 'Nordic Society', 'Origami Society', 'Pakistan Society', 'Parkour Club', 'Photo Society', 'Pi Media', 'Poker Society', 'Pole Fitness', 'Polish Society', 'Portuguese Speaking Society', 'Promotion of Animal Welfare Society (PAWS)', 'Public Affairs and Social Service Society', 'Pure Krav Maga Club', 'RAG Society', 'Rare FM Society', 'Red Star FC', 'Retail & Luxury Goods Society', 'Robotics Society', 'Rock & Metal Society', 'Romanian & Moldovan Society', "Rugby Club (Men's)", "Rugby Club (RUMS Men's)", "Rugby Club (Women's)", 'Running, Athletics & Cross Country Club', 'Russian Society', 'Salsa Society', 'SAVAGE Journal', 'Sci-Fi and Fantasy Society', 'Scuba Club', 'Shaolin Kung Fu Club', 'Sign Language Society', 'Sikh Society', 'Singapore Society', 'Skateboarding Club', 'Snooker and Pool', 'Snowsports Club', 'Socialist Worker Student Society', 'Somali Society', 'Spanish and Latin American Society', 'Squash Club', 'Squash Club (RUMS)', 'Sri Lankan Society', 'Stage Crew Society', 'Student Action for Refugees', 'Surf Club', 'Surgical Society', 'Swimming Club', 'Swiss Society', 'Table Tennis Club', 'Tabletop, Boardgames and Gaming Society', 'Taekwondo Club', 'Taiwanese Society', 'Tamil Society', 'Tea Society', 'Technology Society', 'Tennis Club', 'Tennis Club (RUMS)', 'Thai Society', 'TherouxSoc', 'Trampoline Club', 'Ukrainian Society', 'Ultimate Frisbee Club', 'Unicef Society', 'Vegetarian & Vegan Society', 'Venezuelan Society ', 'Vietnamese Society', 'Volleyball Club', 'Volunteering Society', 'Waterpolo Club', 'Wilderness Medicine Society', 'Wing Chun Kung Fu Club', 'Women in Finance Society', 'Workers Liberty Society', "Writers' Society", 'Y.A.S - Yoncé Appreciation Society', 'Yoga & Meditation Society']

//console.log(json[2].time)
//console.log(json[1]);
//console.log(json[0]);

for (var i = 0; i < societies.length; i++) {
  //var soc = JSON.parse(json);
  //console.log(soc);
};

faketweet = {text: "Technology Society", screen_name: "Dio"}

//exports.reply
//tweet.user.screen_name
reply = function(tweet) {

  for (var i = 0; i < societies.length; i++) {
    if (tweet.text.includes(societies[i])) {
      var filterSoc = json.filter(function(soc){
        return societies[i] == soc.society;
      })
        console.log(filterSoc[0].time)

      console.log('hooray');
      return "Hi @" + tweet.screen_name +". The next booking for " + societies[i] + " is on blah blah";
    }


  };
    console.log('hoorayNot');
    return "Hi @" + tweet.screen_name +". Such a society does not exist!";
};

reply(faketweet);

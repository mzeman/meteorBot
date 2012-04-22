Responses = new Meteor.Collection("responses");

Meteor.publish('responses', function () {
  return Responses.find();
});

Meteor.startup(function () {
  if (Responses.find().count() === 0) {
    var data = [
      {
       trigger: "!!help",
       phrase: "Use the addThought command"
      }
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
      var response_id = Responses.insert({trigger: data[i].trigger, phrase: data[i].phrase, timestamp: timestamp});
    }
  }
 ZBot.init();
});

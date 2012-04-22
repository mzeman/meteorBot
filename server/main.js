Responses = new Meteor.Collection("responses");

Meteor.publish('responses', function () {
  return Responses.find();
});

Meteor.startup(function () {
  if (Responses.find().count() === 0) {
    var data = [
      {
       trigger: "!!help",
       phrase: "Follow meteorBot development @ https://github.com/mzeman/meteorBot - You can also add new thoughts with the addThought command: addThought|trigger(lowercase)|response"
      }
    ];

    var timestamp = (new Date()).getTime();
    for (var i = 0; i < data.length; i++) {
      var response_id = Responses.insert({trigger: data[i].trigger, phrase: data[i].phrase, timestamp: timestamp});
    }
  }
 ZBot.init();
});

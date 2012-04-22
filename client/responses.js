Responses = new Meteor.Collection("responses");

Meteor.subscribe('responses', function () {
});

Template.responses.responses = function () {
  return Responses.find({}, {sort: {trigger: 1}});
};

/*
Template.response.trigger = function () {
  return this.trigger;
};
Template.response.phrase = function () {
  return this.phrase;
};
*/
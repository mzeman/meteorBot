Responses = new Meteor.Collection("responses");

Meteor.subscribe('responses', function () {
});

Template.responses.responses = function () {
  return Responses.find({}, {sort: {trigger: 1}});
};

Template.response.selected = function () {
  return Session.equals('selected_response', this._id) ? 'selected_response' : '';
};

Template.response.events = {
  'click': function (evt) {
    Session.set('selected_response', this._id);
  }
};

Template.delete_response.events = {
  'mousedown': function (evt) {
    requestID = Session.get('selected_response');
    if(requestID != null){
    	Responses.remove(requestID);
    	Session.set('select_response', null);
    }
  }
};

Template.add_response.events = {
  'click .addResponse': function (evt) { 
  	if ($("input#trigger").val() != "" && $("input#phrase").val()){
  	  var timestamp = (new Date()).getTime();
      var response_id = Responses.insert({trigger: $("input#trigger").val(), phrase: $("input#phrase").val(), timestamp: timestamp});
      $("input").val("");
  	}else{
  		alert("Please input a trigger and a phrase");
  	}
  }
};

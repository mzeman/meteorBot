var require = __meteor_bootstrap__.require,
irc = require('irc')
var ZBot = new function() {
	client = null;
	this.init = function() {
		client = new irc.Client('irc.freenode.net', 'zemansThoughs', {
	        channels: ['#zTest4323'],
	    }); 

	    client.addListener('message', ZBot.handleMessage);
	};

	this.handleMessage = function(from, to, message) {
		Fiber(function(){	
			var timestamp = (new Date()).getTime();
			botList = Lists.findOne({name: "Bot"});
			if(message.indexOf("addThought") > -1){
				thoughtPieces = message.split("|");
				if(thoughtPieces[1] && thoughtPieces[2])
				{
					theIndex = Todos.insert({timestamp : timestamp, list_id : botList._id, text : thoughtPieces[1], tags : [thoughtPieces[2]]})
					//client.say("#zTest4323", "Thought Added: " + theIndex);
					client.say("#zTest4323", "Thought Added");

				}
			}else{
				todoList = Todos.findOne({list_id : botList._id, text : {$in : message.toLowerCase().split(" ") }})
				if(todoList && todoList.tags){
					client.say("#zTest4323", todoList.tags);
				}
			}
		}).run();
	};
};

var require = __meteor_bootstrap__.require,
irc = require('irc')
var ZBot = new function() {
	config = IRCConfig;
	client = null;
	this.init = function() {
		client = new irc.Client(IRCConfig.server, IRCConfig.nick,  IRCConfig.opts); 
		client.connect(function(){client.say("#zTest4323", "Online");});
	    client.addListener('message', ZBot.handleMessage);
	};

	this.handleMessage = function(from, to, message) {
		Fiber(function(){	
			var timestamp = (new Date()).getTime();
			if(message.indexOf("addThought") == 0){
				thoughtPieces = message.split("|");
				if(thoughtPieces[1] && thoughtPieces[2])
				{
					theIndex = Responses.insert({timestamp : timestamp, trigger : thoughtPieces[1], phrase : [thoughtPieces[2]]})
					client.say("#zTest4323", "Thought Added");

				}
			}else{
				response = Responses.findOne({trigger : {$in : message.toLowerCase().split(" ") }})
				if(response && response.phrase){
					client.say("#zTest4323", response.phrase);
				}
			}
		}).run();
	};
};

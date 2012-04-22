var IRCConfig = new function(){
	this.server = "hostname";
	this.nick = 'desiredNick';	
	//The below are all optional. See node-irc documentation
	this.opts ={
	        channels: ['#zTest4323'], //Channl to auto-join
	        userName: 'meteorBot', //Whatver you would like
	        realName: 'metorBot', //Whatver you would like
	        floodProtection: true,
	        floodProtectionDelay: 1000,
	        password: '##', //If server requires password
	        port: 6777,
	        secure: true, //Only use for ssl based server
	        selfSigned: true, //Ignore SSL Certificates
	    	autoConnect: false}; //Require the use of .conect() funciton
};
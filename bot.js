const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('lol carlos is fat ok made by extomine');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong ur mom hahahalolllool');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.H8sy9Ubcj5Q4Xgrt5bv5nq52zSleM-fd);

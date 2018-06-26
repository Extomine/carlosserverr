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
client.login(process.env.B0T_T0KEN);

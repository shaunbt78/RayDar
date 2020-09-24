const commando = require('discord.js-commando');
const discord = require('discord.js');
var request = require('request');
//var mcIP = '84.64.129.79'; // Your MC server IP or hostname address
//var mcPort = 25565; // Your MC server port (25565 is the default)
class ServerCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'whois',
            group: 'main',
            memberName: 'whois',
            description: 'checks ip using an API'
        });
    }

    async run(message, args){
        var usrIP = message.content.replace('-whois', '')
        if (usrIP) {
        var url = 'http://ip-api.com/json/' + usrIP;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting location data...');
            }
            body = JSON.parse(body);
            let serverEmbed = new discord.RichEmbed()
            .setTitle(body)
            .addField("server status")
            .addField("players online:")
            .setFooter(usrIP)
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/CtbR1IB.png')
            .setColor(0x00ff00)
        message.channel.send(serverEmbed)
        });
    }else{
        message.channel.send("Please include an address to query.")
    }
}
}
module.exports = ServerCommand;
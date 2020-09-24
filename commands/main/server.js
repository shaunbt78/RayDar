const commando = require('discord.js-commando');
const discord = require('discord.js');
var request = require('request');
//var mcIP = '84.64.129.79'; // Your MC server IP or hostname address
//var mcPort = 25565; // Your MC server port (25565 is the default)
class ServerCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'server',
            group: 'main',
            memberName: 'server',
            description: 'checks status'
        });
    }

    async run(message, args){
        var mcIP = message.content.replace('-server', '')
        if (mcIP) {
        var url = 'https://api.mcsrvstat.us/2/' + mcIP;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = 'the requested server is currently **offline**';
            if(body.online) {
                status = body.motd.clean+' is **online** ';
                if(body.players.online) {
                    var players = `${body.players.online} Players`;
                } else {
                    var players = "it's a ghost town";
                }
            }
            let serverEmbed = new discord.RichEmbed()
            .setTitle("𝒮𝑒𝓇𝓋𝑒𝓇 𝒮𝓉𝒶𝓉𝓊𝓈:")
            .addField("server status", status)
            .addField("players online:", players)
            .setFooter(mcIP+":"+body.port)
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/CtbR1IB.png')
            .setColor(0x00ff00)
        message.channel.send(serverEmbed)
        });
    }else{
        message.channel.send("Please include a server address :)")
    }
}
}
module.exports = ServerCommand;
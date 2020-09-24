const commando = require('discord.js-commando');
const discord = require('discord.js');

class rollCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'main',
            memberName: 'roll',
            description: 'roll given any number'
        });
    }

    async run(message, args){
            let targetUser = message.author.username
            let rollammount = message.content.substring(6);
            var chance = Math.floor((Math.random() * (rollammount)) + 1);
        if(!rollammount){
            message.channel.send(`you need to pick a number`);
        }
        else{
            let rollEmbed = new discord.RichEmbed()
            .setTitle(targetUser + "'s " + rollammount + " sided dice roll.")
            .setDescription(`you rolled a ${chance}!`)
            .setThumbnail('https://previews.123rf.com/images/luislouro/luislouro1210/luislouro121000048/15785519-man-in-a-suit-playing-dice-isolated-in-white.jpg')
            .setColor(0xf45342)
        message.channel.send(rollEmbed)
        };
    }
}

module.exports = rollCommand;
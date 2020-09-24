const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'main',
            memberName: 'info',
            description: 'bot info'
        });
    }

    async run(message, args){
        var myInfo = new discord.RichEmbed()
        .setTitle("Gaydar Bot remastered™ v77.1")
        .setDescription("A semi-functional bot with all kinds of whacky features.")
        .setColor(0x00ffff)
        .setThumbnail('https://i.imgur.com/UDbUZRG.png')
        .setFooter("- By Shaun BT")
        .setTimestamp()
        .addField("-info", 
        "gives general info about the bot.")
        .addField("-bankhelp", 
        "Shows the commands and the banking system.")
        .addField("-nword", 
        "Spend your NCoins™ on this risky game")
        .addField("-roll (number)", 
        "Free gambling!")
        .addField("-invite", 
        "an invite link for the bot")
        .addField("-crosshair", 
        "Randomised CS:GO crosshair.")
        .addField("-cat", 
        "Random cat photo.")
        .addField("-penis", 
        "Scientifically accurate penis length calculator.")
        .addBlankField(true)

        message.channel.send(myInfo);
    }
}

module.exports = InfoCommand;
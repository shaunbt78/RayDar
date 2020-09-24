const commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'bankhelp',
            group: 'main',
            memberName: 'bankhelp',
            description: 'bank info'
        });
    }

    async run(message, args){
        var myInfo = new discord.RichEmbed()
        .setTitle("The NCoin Banking System v1")
        .setDescription("there are many commands avalible for you to spend and try to earn back some epic NCoins!")
        .setColor(0xff00ff)
        .setThumbnail('https://www.marshallstrategy.com/wp-content/uploads/2016/10/bank1.jpg')
        .setFooter("- By Shaun BT")
        .setTimestamp()
        .addField("-bank", 
        "your current NCoin balance")
        .addField("-ncoin", 
        "your 5 free ncoins! (Once every 12 hrs)")
        .addField("-mainbank", 
        "every -ncoin adds 2 to this global bank")
        .addField("-heist", 
        "attempt becoming part of the riches with this challenge, where you might take home the mainbank! (rare)")
        .addField("-trade (user) (amount)", 
        "trade with others for high chances of heists, then split i guess?")
        .addField("-ubank (user)", 
        "show a users balance.")
        .addBlankField(true)

        message.channel.send(myInfo);
    }
}

module.exports = InfoCommand;
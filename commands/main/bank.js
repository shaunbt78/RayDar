const commando = require('discord.js-commando');
const ncoin = require("../../ncoin.json");
const fs = require("fs");
const discord = require('discord.js');
const talkedRecently = new Set();

class BankCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'bank',
            group: 'main',
            memberName: 'bank',
            description: 'your ncoin bank'
        });
    }

    async run(message, args){
        let targetUser = message.author.username
        if(!ncoin[message.author.id]){
            ncoin[message.author.id] = {
                rep: 0
            };
        }
        let coinEmbed = new discord.RichEmbed()
            .setTitle(targetUser + "'s Bank")
            .addField("NCoins™", (ncoin[message.author.id].rep).toString(),false)
            .setThumbnail('https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/silver-proof-in-capsule/gbch-silver-n.jpg')
            .setColor(0x00ff00)
        message.channel.send(coinEmbed)
        fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = BankCommand;
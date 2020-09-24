const commando = require('discord.js-commando');
const ncoin = require("../../ncoin.json");
const fs = require("fs");
const discord = require('discord.js');
const talkedRecently = new Set();

class uBankCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'ubank',
            group: 'main',
            memberName: 'ubank',
            description: 'show a users bank'
        });
    }

    async run(message, args){
        let targetUser = message.guild.member(message.mentions.users.first());
        let usrname = targetUser.displayName;
        let richboy = "oof he is skint mate."
        if (ncoin[targetUser.id].rep > 1){
            richboy = "oof he is loaded"
        } else {
            richboy = "oof he is skint mate."
        };
        let ubankEmbed = new discord.RichEmbed()
            .setTitle(`${usrname}'s epic bank`)
            .addField("NCoins™", (ncoin[targetUser.id].rep).toString(),false)
            .setThumbnail('https://www.royalmint.com/globalassets/the-royal-mint/images/pages/shop/ranges/gbch/silver-proof-in-capsule/gbch-silver-n.jpg')
            .setColor(0x00ff00)
            .setFooter(`${richboy}`)
        message.channel.send(ubankEmbed)
        fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = uBankCommand;
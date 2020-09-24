const commando = require('discord.js-commando');
const ncoin = require("../../ncoin.json");
const fs = require("fs");
const discord = require('discord.js');
const talkedRecently = new Set();
const bank = 696969

class BankCommand extends commando.Command{

    constructor(client)
    {
        super(client,{
            name: 'mainbank',
            group: 'main',
            memberName: 'mainbank',
            description: 'the balance of the big bank'
        });
    }

    async run(message, args){
        let targetUser = message.author.username
        if(!ncoin[bank]){
            ncoin[bank] = {
                rep: 0
            };
        }
        let coinEmbed = new discord.RichEmbed()
            .setTitle("The Global Bank")
            .addField("NCoins™", (ncoin[bank].rep).toString(),false)
            .setThumbnail('https://theuglytruth.files.wordpress.com/2015/06/jew-shekels.jpg')
            .setColor(0x00ff00)
            .setFooter("this will increase by 2 every -nword")
        message.channel.send(coinEmbed)
        fs.writeFile("ncoin.json", JSON.stringify(ncoin), (err) =>{
            if(err){
                console.log(err);
            }
        });
    }
}

module.exports = BankCommand;